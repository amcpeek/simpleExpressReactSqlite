
const express = require('express')
const app = express()
const port = 3001
const cors=require("cors");
const db = require('better-sqlite3')('dev.db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
  // res.send('This should go from the backend to the frontend')
  const row = db.prepare('SELECT * FROM coffee').all();
  // console.log('what is row?', row)
  res.json({message: row})
})

// app.post('/', (req, res) => {
//   const {name, description} = req.body
//   const inserted = db.prepare(`INSERT INTO coffee (name, description) VALUES (${req.body.name}, ${req.body.description})`);
//   res.json({message: "success!"})
// })
app.post('/', (req, res) => {
  const { name, description } = req.body;
  // console.log('why not req body', req)
  const inserted = db.prepare(`INSERT INTO coffee (name, description) VALUES ('${name}', '${description}')`);
  inserted.run();
  res.json({ message: "success!" });
});

app.delete('/:id', async(req, res) => {
  const coffeeId = req.params.id
  // console.log('just checking we are getting to the backend', coffeeId)
  const coffeeToDelete = db.prepare(`DELETE FROM coffee WHERE id = ${coffeeId};`)
  coffeeToDelete.run();
  res.json({ message: "success deleting!" });
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// INSERT INTO coffee (name, description)
// VALUES ('Black', 'just coffee'), ('Latte', 'espresso and steamed milk'), ('Cappuccino', 'espresso steamed milk and foam');
