import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ggbagcxglbjhqcmqmhlu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnYmFnY3hnbGJqaHFjbXFtaGx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg3MjQxNzMsImV4cCI6MTk3NDMwMDE3M30.Lz7Ce0RiTLG_2fWmtAMWUYsvPheHwWckdhbjcqLi_48"
const supabase = createClient(supabaseUrl, supabaseKey);


let { data, error } = await supabase
  .from('Database')
  .select('id')


console.log(data, error);
