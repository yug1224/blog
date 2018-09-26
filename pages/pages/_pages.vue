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
        <my-adsense />
        <my-pager :pager='pager'/>
      </article>
      <my-aside :categories='categories' />
    </div>
  </div>
</template>

<script>
import MyAdsense from '~/components/Adsense.vue'
import MyArchive from '~/components/Archive.vue'
import MyAside from '~/components/Aside.vue'
import MyHeader from '~/components/Header.vue'
import MyPager from '~/components/Pager.vue'
import format from 'date-fns/format'
import getters from '~/plugins/getters'
import hljs from 'highlight.js'

export default {
  components: {
    MyAdsense,
    MyArchive,
    MyAside,
    MyHeader,
    MyPager
  },
  asyncData({ params, app }) {
    const archives = app.$getters.archives(params)
    const categories = app.$getters.categories()
    const pages = app.$getters.pages()

    archives.forEach(v => {
      v.intro = v.body.split('<!-- more -->')[0]
      delete v.body
    })

    const current = +params.pages
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
          content: 'プログラミングや日常のこと。'
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

      this.$el.querySelectorAll('.entry-content .image img').forEach(el => {
        el.onload = _ => {
          el.classList.add('no-blur')
        }
      })

      twttr.widgets.load()

      const script = document.createElement('script')
      script.src = '//speakerdeck.com/assets/embed.js'
      document.body.appendChild(script)
    })
  }
}</script>
