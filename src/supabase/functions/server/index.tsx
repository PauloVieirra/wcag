import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Initialize Supabase clients
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_ANON_KEY')!,
);

// Health check endpoint
app.get("/make-server-6cf82b18/health", (c) => {
  return c.json({ status: "ok" });
});

// Initialize database - Create tables
app.post("/make-server-6cf82b18/init", async (c) => {
  try {
    // Create wcag_cards table using KV store
    await kv.set('wcag_cards_table_created', 'true');
    
    return c.json({ message: "Database initialized successfully" });
  } catch (error) {
    console.error("Initialization error:", error);
    return c.json({ error: "Failed to initialize database", details: error.message }, 500);
  }
});

// Sign up endpoint
app.post("/make-server-6cf82b18/signup", async (c) => {
  try {
    const { email, password, name, role = 'user' } = await c.req.json();

    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    // Create user with admin privileges
    const { data: user, error: signUpError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      user_metadata: { name, role },
      email_confirm: true // Auto-confirm since we don't have email server configured
    });

    if (signUpError) {
      console.error("Sign up error:", signUpError);
      return c.json({ error: "Failed to create user", details: signUpError.message }, 400);
    }

    // Store user profile in KV store
    const userProfile = {
      id: user.user.id,
      email,
      name,
      role,
      created_at: new Date().toISOString()
    };

    await kv.set(`user_profile:${user.user.id}`, JSON.stringify(userProfile));

    return c.json({ 
      message: "User created successfully",
      user: userProfile
    });
  } catch (error) {
    console.error("Sign up error:", error);
    return c.json({ error: "Failed to create user", details: error.message }, 500);
  }
});

// Get user profile
app.get("/make-server-6cf82b18/profile", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(accessToken);
    if (userError || !user) {
      return c.json({ error: "Invalid token" }, 401);
    }

    // Get profile from KV store
    const profileData = await kv.get(`user_profile:${user.id}`);
    let profile;

    if (profileData) {
      profile = JSON.parse(profileData);
    } else {
      // Fallback: create profile from user metadata
      profile = {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name || '',
        role: user.user_metadata?.role || 'user',
        created_at: user.created_at
      };
      await kv.set(`user_profile:${user.id}`, JSON.stringify(profile));
    }

    return c.json({ profile });
  } catch (error) {
    console.error("Profile fetch error:", error);
    return c.json({ error: "Failed to fetch profile", details: error.message }, 500);
  }
});

// Get all WCAG cards
app.get("/make-server-6cf82b18/wcag-cards", async (c) => {
  try {
    // Get all cards from KV store with prefix
    const cards = await kv.getByPrefix('wcag_card:');
    const parsedCards = cards.map(card => JSON.parse(card));

    return c.json({ cards: parsedCards });
  } catch (error) {
    console.error("Cards fetch error:", error);
    return c.json({ error: "Failed to fetch cards", details: error.message }, 500);
  }
});

// Create WCAG card (admin only)
app.post("/make-server-6cf82b18/wcag-cards", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(accessToken);
    if (userError || !user) {
      return c.json({ error: "Invalid token" }, 401);
    }

    // Check if user is admin
    const profileData = await kv.get(`user_profile:${user.id}`);
    if (!profileData) {
      return c.json({ error: "User profile not found" }, 404);
    }

    const profile = JSON.parse(profileData);
    if (profile.role !== 'admin') {
      return c.json({ error: "Admin access required" }, 403);
    }

    const { criterion_id, title, level, principle, category, description, keywords, url } = await c.req.json();

    if (!criterion_id || !title || !level || !principle || !category || !description) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const card = {
      id: Date.now().toString(),
      criterion_id,
      title,
      level,
      principle,
      category,
      description,
      keywords: keywords || [],
      url,
      created_by: user.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    await kv.set(`wcag_card:${card.id}`, JSON.stringify(card));

    return c.json({ message: "Card created successfully", card });
  } catch (error) {
    console.error("Card creation error:", error);
    return c.json({ error: "Failed to create card", details: error.message }, 500);
  }
});

// Update WCAG card (admin only)
app.put("/make-server-6cf82b18/wcag-cards/:id", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(accessToken);
    if (userError || !user) {
      return c.json({ error: "Invalid token" }, 401);
    }

    // Check if user is admin
    const profileData = await kv.get(`user_profile:${user.id}`);
    if (!profileData) {
      return c.json({ error: "User profile not found" }, 404);
    }

    const profile = JSON.parse(profileData);
    if (profile.role !== 'admin') {
      return c.json({ error: "Admin access required" }, 403);
    }

    const cardId = c.req.param('id');
    const updateData = await c.req.json();

    // Get existing card
    const existingCardData = await kv.get(`wcag_card:${cardId}`);
    if (!existingCardData) {
      return c.json({ error: "Card not found" }, 404);
    }

    const existingCard = JSON.parse(existingCardData);
    const updatedCard = {
      ...existingCard,
      ...updateData,
      updated_at: new Date().toISOString()
    };

    await kv.set(`wcag_card:${cardId}`, JSON.stringify(updatedCard));

    return c.json({ message: "Card updated successfully", card: updatedCard });
  } catch (error) {
    console.error("Card update error:", error);
    return c.json({ error: "Failed to update card", details: error.message }, 500);
  }
});

// Delete WCAG card (admin only)
app.delete("/make-server-6cf82b18/wcag-cards/:id", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(accessToken);
    if (userError || !user) {
      return c.json({ error: "Invalid token" }, 401);
    }

    // Check if user is admin
    const profileData = await kv.get(`user_profile:${user.id}`);
    if (!profileData) {
      return c.json({ error: "User profile not found" }, 404);
    }

    const profile = JSON.parse(profileData);
    if (profile.role !== 'admin') {
      return c.json({ error: "Admin access required" }, 403);
    }

    const cardId = c.req.param('id');
    await kv.del(`wcag_card:${cardId}`);

    return c.json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error("Card deletion error:", error);
    return c.json({ error: "Failed to delete card", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);