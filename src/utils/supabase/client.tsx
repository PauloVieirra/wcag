import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

// Global variable to store the singleton instance
let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  // Only create the client if it doesn't exist
  if (!supabaseClient) {
    supabaseClient = createClient(
      `https://${projectId}.supabase.co`,
      publicAnonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    );
  }
  return supabaseClient;
}

// Export the singleton instance for direct use
export const supabase = getSupabaseClient();