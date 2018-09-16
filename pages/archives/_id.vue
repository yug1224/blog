<template>
  <div>
    <my-header/>
    <div class='container main'>
      <article>
        <my-archive :archive='archive' />
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
    const archive = app.$getters.archives(params)
    const categories = app.$getters.categories()

    const pager = {}
    if (archive.prev) {
      pager.prev = `/archives/${archive.prev}`
    }
    if (archive.next) {
      pager.next = `/archives/${archive.next}`
    }

    return {
      archive,
      categories,
      pager
    }
  },
  head() {
    return {
      title: `${this.archive.title} - YuG1224 blog`,
      meta: [
        {
          property: 'og:title',
          content: this.archive.title
        },
        {
          property: 'og:description',
          content: this.archive.intro
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:image',
          content: this.archive.image || 'https://blog.yug1224.com/images/profile/profile.png'
        },
        {
          property: 'og:url',
          content: `https://blog.yug1224.com/archives/${this.archive.id}`
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
    })
  }
}</script>
