<template>
  <div>
    <my-header/>
    <div class='container main'>
      <article>
        <my-archive
          v-for='(archive, index) in archives'
          :archive='archive'
          :key='index'
        />
        <my-pager :pager='pager'/>
      </article>
      <my-aside :categories='categories' />
    </div>
  </div>
</template>

<script>
import MyArchive from '~/components/organisms/Archive.vue'
import MyAside from '~/components/organisms/Aside.vue'
import MyHeader from '~/components/organisms/Header.vue'
import MyPager from '~/components/organisms/Pager.vue'
import format from 'date-fns/format'
import getters from '~/plugins/getters'
import hljs from 'highlight.js'

export default {
  components: {
    MyArchive,
    MyAside,
    MyHeader,
    MyPager
  },
  asyncData({ params, app }) {
    const archives = app.$getters.archives({ pages: 1 })
    const categories = app.$getters.categories()
    const pages = app.$getters.pages()

    archives.forEach(v => {
      v.intro = v.body.split('<!-- more -->')[0]
      delete v.body
    })

    const current = 1
    const pager = {
      prev: `/pages/${current - 1}`
    }
    if (pages > current * 5) {
      pager.next = `/pages/${current + 1}`
    }

    return {
      archives,
      categories,
      pager
    }
  },
  head() {
    return {
      meta: [
        {
          property: 'og:title',
          content: 'YuG1224 blog'
        },
        {
          property: 'og:description',
          content: 'プログラミングやカメラや日常のこと。'
        },
        {
          property: 'og:type',
          content: 'blog'
        },
        {
          property: 'og:image',
          content: 'https://blog.yug1224.com/images/profile/profile.png'
        },
        {
          property: 'og:url',
          content: 'https://blog.yug1224.com'
        }
      ]
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      hljs.initHighlighting.called = false
      hljs.initHighlighting()

      this.$el.querySelectorAll('img').forEach(el => {
        const { src } = el.dataset
        const image = new Image()
        image.src = src
        image.onload = _ => {
          console.log(image)
          el.setAttribute('style', `content: url("${src}")`)
        }
      })
    })
  }
}</script>
