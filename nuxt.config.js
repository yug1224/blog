module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'YuG1224 blog',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/profile/profile.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/zenburn.css'],
  /*
  ** Add axios globally
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: () => {
      const archives = require('./data/archives.json')
      const redirect = require('./data/redirect.json')
      const uniq = require('lodash/uniq')
      let result = []
      archives.forEach(v => {
        result.push(`/archives/${v.id}`)
        Array.prototype.push.apply(result, v.categories.map(v => `/categories/${v}`))
      })
      for (let i = 1; i * 5 < archives.length; i++) {
        result.push(`/pages/${i}`)
      }
      Array.prototype.push.apply(result, Object.keys(redirect))
      result = result.sort((a, b) => {
        return a < b ? 1 : -1
      })
      result = uniq(result)
      return result
    }
  },
  modules: ['@/modules/hook/build'],
  plugins: [
    '~/plugins/getters',
    {
      src: '~/plugins/image',
      ssr: false
    },
    {
      src: '~/plugins/gtag',
      ssr: false
    }
  ]
}
