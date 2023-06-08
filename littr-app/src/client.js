
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://euqjsbmhstconbvtqiie.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cWpzYm1oc3Rjb25idnRxaWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNDQ2MjMsImV4cCI6MjAwMTcyMDYyM30.Vkfi6uKId_Yp7rG19Fao1lGaPBgOiocCB-X4sdMhEbg'
export const supabase = createClient(supabaseUrl, supabaseKey)