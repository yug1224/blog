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
      <my-aside :categories='categories' />
    </div>
  </div>
</template>

<script>
import MyArchive from '~/components/organisms/Archive.vue'
import MyAside from '~/components/organisms/Aside.vue'
import MyHeader from '~/components/organisms/Header.vue'
import format from 'date-fns/format'
import getters from '~/plugins/getters'
import hljs from 'highlight.js'

export default {
  components: {
    MyArchive,
    MyAside,
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
      categories,
      category: params.category
    }
  },
  head() {
    return {
      title: `Category: ${this.category} - YuG1224 blog`,
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
    })
  }
}</script>
