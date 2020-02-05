const express = require('express')
const app = express()
const port = 1501
let counter = 0

app.use(express.static('public'));

app.get('/hello', (req, res) => res.send('Hello MAX'))

app.get('/counter', function (req, res) {
	counter = counter + 1
  res.send('Counter ' + counter)
})

app.get('/date', function (req, res) {
	let d = new Date();
  res.send('date ' + d)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
