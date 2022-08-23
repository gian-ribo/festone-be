const { Router } = require('express')
const router = Router()

router
  .get('/:id', (req, res) => {
    const { id } = req.params
    res.send(`GET single comment with id: ${id}`)
  })
  .get('/', (req, res) => {
    res.send('GET all comments written')
  })
  .post('/', (req, res) => {
    res.send(`POST with this body: ${req.body.text}`)
  })
  .put('/:id', (req, res) => {
    const { id } = req.params
    res.send(`PUT to mody single comment with id: ${id}`)
  })

module.exports = router