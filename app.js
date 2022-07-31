const fs = require('fs')
const path = require('path')
const { ulid } = require('ulid')
const mkdirp = require('mkdirp')
const format = require('date-fns/format')
const yaml = require('js-yaml')

const now = new Date()
const id = ulid().toLowerCase()
const filepath = path.resolve(`./data/${format(now, 'yyyy/MM/dd/')}`)
const filename = `${id}.md`
const frontMatter = yaml.dump({
  id,
  title: '',
  create: format(now, 'yyyy-MM-dd HH:mm'),
  modify: format(now, 'yyyy-MM-dd HH:mm'),
  categories: [],
})
const data = `---\n${frontMatter}---\n<!-- more -->\n`

mkdirp.sync(filepath)
fs.writeFileSync(`${filepath}/${filename}`, data)
