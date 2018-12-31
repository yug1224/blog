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
      </article>
    </div>
  </div>
</template>

<script>
import MyArchive from '~/components/Archive.vue'
import MyHeader from '~/components/Header.vue'
import format from 'date-fns/format'
import getters from '~/plugins/getters'
import hljs from 'highlight.js'

export default {
  components: {
    MyArchive,
    MyHeader
  },
  asyncData({ params, app }) {
    const archives = app.$getters.archives(params)
    const categories = app.$getters.categories()

    archives.forEach(v => {
      delete v.body
    })

    return {
      archives,
      categories
    }
  },
  head() {
    return {
      title: this.getTitle(),
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.getTitle()
        }
      ]
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      hljs.initHighlighting.called = false
      hljs.initHighlighting()
    })
  },
  methods: {
    getTitle() {
      return 'Archives - YuG1224 blog'
    }
  }
}</script>
