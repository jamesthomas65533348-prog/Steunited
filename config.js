// STE UNITED - Supabase Config
const SUPABASE_URL = "https://shkrzfssaqsbjltqsqfs.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoa3J6ZnNzYXFzYmpsdHFzcWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwMDQ0MDQsImV4cCI6MjEwMDU4MDQwNH0._9bFUxdarpZeOHdbGNE0oEL8sWSyVBmjM6WuVhNSOwg"

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Admin emails
export const ADMIN_EMAILS = [
  "jamesthomas65533348@gmail.com",
  "aminumuhammed502@gmail.com"
]

// Rating color helper - FIFA style
export function getRatingColor(rating) {
  if (rating >= 90) return "#FFD700"; // glowing gold
  if (rating >= 87) return "#FFC107"; // gold
  if (rating >= 82) return "#9C27B0"; // purple
  if (rating >= 75) return "#2196F3"; // blue
  if (rating >= 65) return "#4CAF50"; // green
  return "#9e9e9e"; // gray
}

export function isAdmin(email) {
  return ADMIN_EMAILS.includes(email.toLowerCase())
}