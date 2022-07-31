const fs = require('fs')
const path = require('path')
const { ulid } = require('ulid')
const mkdirp = require('mkdirp')
const format = require('date-fns/format')
const yaml = require('js-yaml')

const now = new Date()
const id = ulid()
const filepath = path.resolve(`./data/${format(now, 'YYYY/MM/DD/')}`)
const filename = `${id}.md`
const frontMatter = yaml.safeDump({
  id,
  title: '',
  create: format(now, 'YYYY-MM-DD HH:mm'),
  modify: format(now, 'YYYY-MM-DD HH:mm'),
  categories: [],
})
const data = `---\n${frontMatter}---\n<!-- more -->\n`

mkdirp.sync(filepath)
fs.writeFileSync(`${filepath}/${filename}`, data)
