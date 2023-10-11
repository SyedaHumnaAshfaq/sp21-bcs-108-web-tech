const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname + '/registration.html'));
    res.sendFile(path.join(__dirname + '/scripting.js'));
    res.sendFile(path.join(__dirname + '/style.css'));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})