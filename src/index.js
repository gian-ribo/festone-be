require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const comments = require('./routes/api/comments')
const PORT = process.env.PORT || 3000

const app = express()

app
  .use(bodyParser.json())
  .use('/api/comments', comments)
  .get('/', (req, res) => {
    res.send('Up & Running')
  })
  .listen(PORT, () => console.log(`Now listening on port ${PORT}`))