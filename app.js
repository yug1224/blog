const { ObjectId } = require('mongojs')
const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const format = require('date-fns/format')
const yaml = require('js-yaml')

const now = new Date()
const id = new ObjectId().toHexString()
const filepath = path.resolve(`./data/${format(now, 'YYYY/MM/DD/')}`)
const filename = `${id}.md`
const frontMatter = yaml.safeDump({
  id,
  title: '',
  create: format(now, 'YYYY-MM-DD HH:mm'),
  modify: format(now, 'YYYY-MM-DD HH:mm'),
  categories: [],
  image: ''
})
const data = `---\n${frontMatter}---\n<!-- more -->\n`

mkdirp.sync(filepath)
fs.writeFileSync(`${filepath}/${filename}`, data)
