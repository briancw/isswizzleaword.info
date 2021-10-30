const express = require('express');
const app = express();
const fs = require('fs');
let hits = fs.readFileSync('hits.txt', 'utf8')
hits = Number(hits)


app.get('/', function(req, res) {
  hits += 1
  fs.writeFileSync('hits.txt', hits)
  res.send('<h1 style="text-align: center; margin-top: 200px;">Nope</h1>');
})

app.get('/hits', function(req, res) {
  res.send(String(hits))
})

app.listen(3024);
