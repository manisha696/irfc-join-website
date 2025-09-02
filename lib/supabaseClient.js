import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://rlegqqpxafkyweqwcail.supabase.co
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsZWdxcXB4YWZreXdlcXdjYWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMzE4NTEsImV4cCI6MjA2NzkwNzg1MX0.Ald94kGq-0ikGKEHJVG1uBMuLU1Nv_K7C0jRoZhXFg0

export const supabase = createClient(supabaseUrl, supabaseKey)
