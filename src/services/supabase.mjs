import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://hchsbjivgmmbamucjexf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjaHNiaml2Z21tYmFtdWNqZXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDI3MDEsImV4cCI6MjAyNjAxODcwMX0.a53X-WOmC8sMeq1dqU24NBlrH5n25zeYGEXgzNAWG20';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
