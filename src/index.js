const express = require('express')
const bodyParser = require('body-parser')
const commentService = require('./routes/api/commentService')

const app = express()
const port = 3000

app
  .use(bodyParser.json())
  .use('/api/comments', commentService)
  .get('/', (req, res) => {
    res.send('Ciaooone')
  })
  .listen(port, () => console.log(`Now listening on port ${port}`))