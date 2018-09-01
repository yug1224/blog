/* eslint-disable no-console */
const fm = require('front-matter')
const fs = require('fs')
const glob = require('glob')
const mongojs = require('mongojs')
const path = require('path')

const ObjectId = mongojs.ObjectId

module.exports = function() {
  this.nuxt.hook('build:before', async () => {
    console.log('build:before')

    const files = glob.sync(path.resolve('data/**/*.md')).sort((a, b) => {
      return a < b ? 1 : -1
    })
    const archiveList = []

    // Markdown を archives を変換
    files.forEach(val => {
      const { attributes: attr, body } = fm(fs.readFileSync(val, 'utf8'))
      const { id, title, create, modify, categories, image } = attr

      archiveList.push({
        id: new ObjectId(id),
        title,
        create: new Date(create),
        modify: new Date(modify),
        categories: categories.sort((a, b) => {
          return a > b ? 1 : -1
        }),
        image,
        body
      })
    })

    fs.writeFileSync('./data/archives.json', JSON.stringify(archiveList, null, 2))
  })
}
