const express = require('express')
const fs = require('fs');

const app = express()
const port = 3000




app.get('/', (req, res) => {
  res.send('Hello Rohit World')
})


app.get('/get-user', (req, res) => {
  const datareturn = fs.readFileSync('./data-json/data.json');
  var arrrara = JSON.parse( datareturn );
  res.json(arrrara);
});


app.get('/get-software-programmer', (req, res) => {
  const datareturn = fs.readFileSync('./data-json/data.json');
  var arrrara = JSON.parse( datareturn );
  res.json(arrrara);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})