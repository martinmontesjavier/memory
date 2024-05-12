import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tntyjjhlhutyhlruaery.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRudHlqamhsaHV0eWhscnVhZXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwOTc0MzUsImV4cCI6MjAzMDY3MzQzNX0.Cj6Vr-3HzsKgXqlBti6AaKcc5tlNEKAclXwhNFl3IOA'


export const supabase = createClient(supabaseUrl, supabaseKey)


