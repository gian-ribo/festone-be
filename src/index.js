require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { createPool } = require('slonik')
const cors = require('cors')

;(async () => {

  const PORT = process.env.PORT || 3000
  const app = express()

  const pool = await createPool(`${process.env.DATABASE_URL}?sslmode=no-verify`, {
    maximumPoolSize: 50
  })

  app
    .use(cors())
    .use(bodyParser.json())
    .use('/api/comments', require('./routes/api/comments')(pool))
    .get('/', (req, res) => {
      res.send('Up & Running')
    })
    .listen(PORT, () => console.log(`Now listening on port ${PORT}`))
})()