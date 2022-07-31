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
      </article>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import MyArchive from '~/components/Archive.vue'
import MyHeader from '~/components/Header.vue'

export default {
  components: {
    MyArchive,
    MyHeader,
  },
  asyncData({ params, app }) {
    const archives = app.$getters.archives(params)
    const categories = app.$getters.categories()

    archives.forEach((v) => {
      delete v.body
    })

    return {
      archives,
      categories,
      category: params.category,
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
      ],
    }
  },
  mounted() {
    this.$nextTick(function () {
      hljs.initHighlighting.called = false
      hljs.initHighlighting()
    })
  },
  methods: {
    getTitle() {
      return `Category: ${this.category} - YuG1224 blog`
    },
  },
}
</script>
