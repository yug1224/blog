import cloneDeep from 'lodash/cloneDeep'
import data from '../data/archives.json'

export const getters = {
  archives: ({ id, pages, category }) => {
    const archives = cloneDeep(data)
    let begin
    let end
    let result = archives

    if (id) {
      result = archives.find(v => {
        return v.id === id
      })
    }

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

    return result
  },
  categories: () => {
    const archives = cloneDeep(data)
    const o = {}
    let result

    archives.forEach(v => {
      v.categories.forEach(v => {
        o[v] = (o[v] || 0) + 1
      })
    })
    result = Object.keys(o)
      .sort((a, b) => {
        return o[a] < o[b] ? 1 : -1
      })
      .map(v => {
        return [v, o[v]]
      })
    return result
  },
  pages: () => {
    return cloneDeep(data).length
  }
}

export default (_, inject) => {
  inject('getters', getters)
}
