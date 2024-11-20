// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://plfodorkbtjhqwwigidb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsZm9kb3JrYnRqaHF3d2lnaWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwOTc3NDcsImV4cCI6MjA0NzY3Mzc0N30.ybXTs5PbfcVcq4jc9WwXKikUUbOwMnAqFOyJ2HSgSZw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);