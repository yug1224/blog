/* eslint-disable no-console */
const { generate } = require('../../nuxt.config.js')
const { JSDOM } = require('jsdom')
const { ObjectId } = require('mongojs')
const consola = require('consola')
const fm = require('front-matter')
const format = require('date-fns/format')
const fs = require('fs')
const glob = require('glob')
const hljs = require('highlight.js')
const jimp = require('jimp')
const md = require('marked')
const path = require('path')
const sm = require('sitemap')

md.setOptions({
  highlight(code) {
    return hljs.highlightAuto(code).value
  }
})

module.exports = async function() {
  // eslint-disable-next-line
  this.nuxt.hook('build:before', async () => {
    const files = glob.sync(path.resolve('data/**/*.md')).sort((a, b) => {
      return a < b ? 1 : -1
    })
    const archiveList = []
    const renderer = new md.Renderer()
    renderer.image = (href, title, text) => {
      return `<p class='image'><img src='${href}' title='${title}' alt='${text}'></p>`
    }

    // Markdown を archives を変換
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      let { attributes: attr, body } = fm(fs.readFileSync(file, 'utf8'))
      let { id, title, create, modify, categories, image } = attr
      let datetime, date, prev, next, dom

      id = new ObjectId(id)
      create = new Date(create)
      modify = new Date(modify)
      datetime = format(create, 'YYYY-MM-DD HH:mm')
      date = format(create, 'MMM DD, YYYY')
      body = md(body, { renderer })
      dom = new JSDOM(body).window.document.body
      for (const el of dom.querySelectorAll('img')) {
        let imagePath = el.src
        if (/^\/images\/.*/.test(el.src)) {
          imagePath = path.resolve(`./static${el.src}`)
        }
        const image = await jimp.read(imagePath)
        const toBase64 = () => {
          return new Promise(resolve => {
            image.quality(50).getBase64(jimp.MIME_JPEG, async (err, base64) => {
              el.setAttribute('style', `content: url("${base64}")`)
              resolve()
            })
          })
        }
        await toBase64()
      }
      body = dom.innerHTML

      next = files[i - 1] ? fm(fs.readFileSync(files[i - 1], 'utf8')).attributes.id : ''
      prev = files[i + 1] ? fm(fs.readFileSync(files[i + 1], 'utf8')).attributes.id : ''

      archiveList.push({
        id,
        title,
        create,
        datetime,
        date,
        modify,
        categories: categories.sort((a, b) => {
          return a > b ? 1 : -1
        }),
        image,
        body,
        prev,
        next
      })
      consola.info(file)
    }

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
