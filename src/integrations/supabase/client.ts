// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bfmftolahtqjnarcljbj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmbWZ0b2xhaHRxam5hcmNsamJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MTUwMjgsImV4cCI6MjA1MzA5MTAyOH0.JAOFd6nO6h2nLQX39q0agg5d6OHT0ivkZjfori9-5pE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);