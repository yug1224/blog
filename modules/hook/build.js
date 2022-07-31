/* eslint-disable */

import { Readable } from 'stream'
import fs from 'fs'
import path from 'path'

import { JSDOM } from 'jsdom'
import { marked } from 'marked'
import { SitemapStream, streamToPromise } from 'sitemap'
import consola from 'consola'
import fm from 'front-matter'
import format from 'date-fns/format'
import glob from 'glob'
import hljs from 'highlight.js'
import jimp from 'jimp'

import config from '../../nuxt.config.js'
const { generate } = config

marked.setOptions({
  highlight(code) {
    return hljs.highlightAuto(code).value
  },
})

module.exports = function () {
  // eslint-disable-next-line
  this.nuxt.hook('build:before', async () => {
    const files = glob.sync(path.resolve('data/**/*.md')).sort((a, b) => {
      return a < b ? 1 : -1
    })
    const archiveList = []
    const renderer = new marked.Renderer()
    renderer.image = (href, _, text) => {
      return `<p class='image'><img src='${href}' title='${text}' alt='${text}'></p>`
    }

    // Markdown を archives を変換
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      let { attributes: attr, body } = fm(fs.readFileSync(file, 'utf8'))
      let { id, title, create, modify, categories } = attr
      let date, datetime, description, dom, next, prev

      create = new Date(create)
      modify = new Date(modify)
      datetime = format(create, 'yyyy-MM-dd HH:mm')
      date = format(create, 'MMM dd, yyyy')
      body = marked.parse(body, { renderer })
      dom = new JSDOM(body).window.document.body
      for (const el of dom.querySelectorAll('img')) {
        let imagePath = el.src
        if (/^\/images\/.*/.test(el.src)) {
          imagePath = path.resolve(`./static${el.src}`)
        }
        const image = await jimp.read(imagePath)
        const toBase64 = () => {
          return new Promise((resolve) => {
            image.quality(50).getBase64(jimp.MIME_JPEG, async (err, base64) => {
              el.setAttribute('style', `content: url("${base64}")`)
              resolve()
            })
          })
        }
        await toBase64()
      }
      body = dom.innerHTML
      description = new JSDOM(
        body.split('<!-- more -->')[0]
      ).window.document.body.textContent
        .trim()
        .replace(/\r?\n/g, ' ')

      prev = files[i - 1]
        ? fm(fs.readFileSync(files[i - 1], 'utf8')).attributes.id
        : ''
      next = files[i + 1]
        ? fm(fs.readFileSync(files[i + 1], 'utf8')).attributes.id
        : ''

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
        body,
        description,
        prev,
        next,
      })
      consola.info(file)
    }

    fs.writeFileSync(
      './data/archives.json',
      JSON.stringify(archiveList, null, 2)
    )

    const urls = []

    generate.routes().forEach((v) => {
      if (/^\/archives\/.*/.test(v)) {
        urls.push({
          url: v,
          changefreq: 'daily',
          priority: 0.5,
        })
      }
    })

    const stream = new SitemapStream({
      hostname: 'https://blog.yug1224.com',
      // 600 sec cache period
      cacheTime: 600000,
    })

    const sitemap = await streamToPromise(
      Readable.from(urls).pipe(stream)
    ).then((data) => data.toString())

    fs.writeFileSync('./static/sitemap.xml', sitemap.toString())
  })
}
