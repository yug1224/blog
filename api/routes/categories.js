const { Router } = require('express')
const router = Router()

const archives = require('../../data/archives.json')

// categories 一覧取得
router.get('/categories', (req, res) => {
  const o = {}
  archives.forEach(v => {
    v.categories.forEach(v => {
      o[v] = (o[v] || 0) + 1
    })
  })
  const result = Object.keys(o)
    .sort((a, b) => {
      return o[a] < o[b] ? 1 : -1
    })
    .map(v => {
      return [v, o[v]]
    })

  if (result) {
    res.json(result)
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
