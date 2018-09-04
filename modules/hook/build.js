/* eslint-disable no-console */
const fm = require('front-matter')
const fs = require('fs')
const glob = require('glob')
const mongojs = require('mongojs')
const path = require('path')
const sm = require('sitemap')
const { generate } = require('../../nuxt.config.js')

const ObjectId = mongojs.ObjectId

module.exports = function() {
  // eslint-disable-next-line
  this.nuxt.hook('build:before', async () => {
    console.log('build:before')

    const files = glob.sync(path.resolve('data/**/*.md')).sort((a, b) => {
      return a < b ? 1 : -1
    })
    const archiveList = []

    // Markdown を archives を変換
    files.forEach((val, i) => {
      const { attributes: attr, body } = fm(fs.readFileSync(val, 'utf8'))
      const { id, title, create, modify, categories, image } = attr

      const prev = files[i - 1] ? fm(fs.readFileSync(files[i - 1], 'utf8')).attributes.id : ''
      const next = files[i + 1] ? fm(fs.readFileSync(files[i + 1], 'utf8')).attributes.id : ''

      archiveList.push({
        id: new ObjectId(id),
        title,
        create: new Date(create),
        modify: new Date(modify),
        categories: categories.sort((a, b) => {
          return a > b ? 1 : -1
        }),
        image,
        body,
        prev,
        next
      })
    })

    fs.writeFileSync('./data/archives.json', JSON.stringify(archiveList, null, 2))

    let urls = []
    generate.routes().forEach(v => {
      if (/^\/archives\/.*/.test(v)) {
        urls.push({
          url: v,
          changefreq: 'daily',
          priority: 0.5
        })
      }
    })

    const sitemap = sm.createSitemap({
      hostname: 'https://blog.yug1224.com',
      cacheTime: 600000, // 600 sec cache period
      urls: urls
    })

    fs.writeFileSync('./static/sitemap.xml', sitemap.toString())
  })
}
