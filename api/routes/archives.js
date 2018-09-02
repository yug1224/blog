const { Router } = require('express')
const router = Router()

const archives = require('../../data/archives.json')

// archives 一覧取得
router.get('/archives', (req, res) => {
  let { pages, category } = req.query
  let begin
  let end
  let result = archives

  if (pages) {
    begin = (+pages - 1) * 5
    end = begin + 5
    result = archives.slice(begin, end)
  }

  if (category) {
    result = archives.filter(v => {
      if (v.categories.includes(category)) {
        return v
      }
    })
  }

  if (result) {
    res.json(result)
  } else {
    res.sendStatus(404)
  }
})

// archives 詳細取得
router.get('/archives/:id', (req, res) => {
  const { id } = req.params
  const result = archives.find(v => {
    return v.id === id
  })

  if (result) {
    res.json(result)
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
