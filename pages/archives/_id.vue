<template>
  <div>
    <my-header/>
    <div class='container main'>
      <article>
        <my-archive :archive='archive' />
        <my-pager :pager='pager'/>
      </article>
      <my-aside :categories='categories' />
    </div>
  </div>
</template>

<script>
import MyHeader from '~/components/organisms/Header.vue'
import MyArchive from '~/components/organisms/Archive.vue'
import MyAside from '~/components/organisms/Aside.vue'
import MyPager from '~/components/organisms/Pager.vue'

import getters from '~/plugins/getters'
import format from 'date-fns/format'
import md from 'marked'
import hljs from 'highlight.js'
md.setOptions({
  highlight(code) {
    return hljs.highlightAuto(code).value
  }
})

export default {
  components: {
    MyHeader,
    MyArchive,
    MyAside,
    MyPager
  },
  asyncData({ params, app }) {
    const archive = app.$getters.archives(params)
    const categories = app.$getters.categories()

    archive.datetime = format(archive.create, 'YYYY-MM-DD HH:mm')
    archive.date = format(archive.create, 'MMM DD, YYYY')
    archive.body = md(archive.body)
    archive.intro = archive.body.split('<!-- more -->')[0]

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
    })
  }
}</script>
