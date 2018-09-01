const { Router } = require('express')
const router = Router()

const archives = require('../../data/archives.json')

// categories 一覧取得
router.get('/categories', (req, res) => {
  const o = {}
  archives.forEach(v => {
    v.categories.forEach(v => {
      o[v] = (o[v] || 1) + 1
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

// categories 詳細取得
router.get('/categories/:category', (req, res) => {
  const { category } = req.params
  const result = archives.filter(v => {
    if (v.categories.includes(category)) {
      delete v.image
      delete v.body
      return v
    }
  })

  if (result) {
    res.json(result)
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
