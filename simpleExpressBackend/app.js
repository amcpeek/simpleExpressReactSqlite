
const express = require('express')
const app = express()
const port = 3001
const cors=require("cors");
const db = require('better-sqlite3')('quotes.db');
const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
  // res.send('This should go from the backend to the frontend')
  const row = db.prepare('SELECT * FROM coffee').all();
  console.log('what is row?', row)
  res.json({message: row})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
