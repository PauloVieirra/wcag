import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase/client';
import { projectId } from '../utils/supabase/info';

interface User {
  id: string;
  email: string;
  profile?: {
    name?: string;
    role?: string;
  };
  session?: any;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          await handleSignIn(session);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const checkSession = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await handleSignIn(session);
      }
    } catch (error) {
      console.error('Error checking session:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (session: any) => {
    try {
      // Get user profile from backend
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6cf82b18/profile`, {
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        }
      });

      let profile = {};
      if (response.ok) {
        const data = await response.json();
        profile = data.profile;
      }

      setUser({
        id: session.user.id,
        email: session.user.email || '',
        profile,
        session
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      // Still set basic user info even if profile fetch fails
      setUser({
        id: session.user.id,
        email: session.user.email || '',
        session
      });
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return {
    user,
    loading,
    signOut,
    setUser // For manual updates after profile changes
  };
}