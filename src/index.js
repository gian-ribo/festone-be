require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const commentService = require('./routes/api/commentService')
const PORT = process.env.PORT || 3000

const app = express()

app
  .use(bodyParser.json())
  .use('/api/comments', commentService)
  .get('/', (req, res) => {
    res.send('Ciaooone')
  })
  .listen(PORT, () => console.log(`Now listening on port ${PORT}`))