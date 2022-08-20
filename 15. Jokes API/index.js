import express
    from "express";
import { getJoke,insertJoke, upvoteJoke,downvoteJoke} from "./utils.js";

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ggbagcxglbjhqcmqmhlu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnYmFnY3hnbGJqaHFjbXFtaGx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg3MjQxNzMsImV4cCI6MTk3NDMwMDE3M30.Lz7Ce0RiTLG_2fWmtAMWUYsvPheHwWckdhbjcqLi_48"
const supabase = createClient(supabaseUrl, supabaseKey);
const app = express()
const port = 3000

 app.get('/',async (req, res) => {
     const jokes =  await getJoke();

     const joke1 = jokes.joke;
    await insertJoke(joke1);


  res.send('Hello World!')
 })
app.get('/upvote',async (req, res) => {
     const jokes =  await getJoke();

     const joke1 = jokes.joke;
    await upvoteJoke(joke1);


  res.send(`new value ${11}`)
})
app.get('/downvote',async (req, res) => {
     const jokes =  await getJoke();

     const joke1 = jokes.joke;
    await downvoteJoke(joke1);


    res.send(`new value ${1}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



 
 