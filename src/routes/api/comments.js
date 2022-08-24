const { Router } = require('express')
const router = Router()
const { sql } = require('slonik')

const fetchComments = async (req, res, pool) => {
  return await pool.any(sql`
    SELECT *
    FROM comment`)
}

const fetchComment = async (req, res, pool) => {
  const { id } = req.params
  let result = {}
  try {
    result = await pool.one(sql`
      SELECT *
      FROM comment
      WHERE id = ${id}`)
  } catch(e) {}

  return result
}

const createComment = async (req, res, pool) => {
  const { name, text } = req.body
  let error = ''
  let result = {}

  if(!text) {
    res.statusCode = 400
    error = 'Incorrect JSON format: text is null'
    return { result, error }
  }

  r = await pool.query(sql`INSERT INTO comment(name, text)
    VALUES(${name}, ${text})
    RETURNING id`)

  result = r.rows[0]

  return { result, error }
}

module.exports = pool => router
  .get('/:id', async (req, res) => {
    const rows = await fetchComment(req, res, pool)

    res.setHeader('content-type', 'application/json')
    res.send(rows)
  })
  .get('/', async (req, res) => {
    const rows = await fetchComments(req, res, pool)

    res.setHeader('content-type', 'application/json')
    res.send(rows)
  })
  .post('/', async (req, res) => {
    let r = await createComment(req, res, pool)

    res.setHeader('content-type', 'application/json')
    res.send(r.error ? { error: r.error } : r.result)
  })