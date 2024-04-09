require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port//5000
app.get('/', (req, res) => {
  res.send('Hello World 1!')
})

app.get('/twitter', (req, res) => {
    res.send('Sreeja!')
  })


app.listen( port, () => { 
  console.log(`Example app listening on port ${port}`)
})