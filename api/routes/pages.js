const { Router } = require('express')
const router = Router()

const archives = require('../../data/archives.json')

// categories 一覧取得
router.get('/pages', (req, res) => {
  res.json(archives.length)
})

module.exports = router
