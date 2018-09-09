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
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
        crossorigin: 'anonymous'
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      },
      {
        rel: 'icon',
        href: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        rel: 'icon',
        href: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
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
  manifest: {
    name: 'YuG1224 Blog',
    lang: 'ja',
    short_name: 'YuG1224 Blog',
    title: 'YuG1224 Blog',
    'og:title': 'YuG1224 Blog',
    description: 'プログラミングや日常のこと。',
    'og:description': 'プログラミングや日常のこと。',
    theme_color: '#007bbb',
    background_color: '#007bbb'
  },
  modules: ['@/modules/hook/build', '@nuxtjs/pwa'],
  plugins: [
    '~/plugins/getters',
    {
      src: '~/plugins/gtag',
      ssr: false
    }
  ],
  workbox: {
    dev: true
  }
}
