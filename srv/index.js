const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World omkar!')
})

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}/`)
})