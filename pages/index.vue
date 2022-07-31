<template>
  <div>
    <my-header />
    <div class="container main">
      <article>
        <my-archive
          v-for="(archive, index) in archives"
          :key="index"
          :archive="archive"
        />
        <my-pager :pager="pager" />
      </article>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import MyArchive from '~/components/Archive.vue'
import MyHeader from '~/components/Header.vue'
import MyPager from '~/components/Pager.vue'

export default {
  components: {
    // MyAdsense,
    MyArchive,
    MyHeader,
    MyPager,
  },
  asyncData({ params, app }) {
    const archives = app.$getters.archives({ pages: 1 })
    const categories = app.$getters.categories()
    const pages = app.$getters.pages()

    archives.forEach((v) => {
      v.intro = v.body.split('<!-- more -->')[0]
      delete v.body
    })

    const current = 1
    const pager = {}
    if (pages > current * 5) {
      pager.next = `/pages/${current + 1}`
    }

    return {
      archives,
      categories,
      pager,
    }
  },
  mounted() {
    this.$nextTick(function () {
      hljs.initHighlighting.called = false
      hljs.initHighlighting()

      this.$el.querySelectorAll('.entry-content .image img').forEach((el) => {
        el.onload = (_) => {
          el.classList.add('no-blur')
        }
      })

      // eslint-disable-next-line no-undef
      twttr.widgets.load()

      const script = document.createElement('script')
      script.src = '//speakerdeck.com/assets/embed.js'
      document.body.appendChild(script)
    })
  },
}
</script>
