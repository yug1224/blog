<template>
  <div>
    <my-header />
    <div class="container main">
      <article>
        <my-archive :archive="archive" />
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
      pager,
    }
  },
  head() {
    return {
      title: this.getTitle(),
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.getTitle(),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.archive.description,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://blog.yug1224.com/archives/${this.archive.id}/`,
        },
      ],
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
  methods: {
    getTitle() {
      return `${this.archive.title} - YuG1224 blog`
    },
  },
}
</script>
