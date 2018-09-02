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
import MyHeader from '~/components/organisms/Header.vue'
import MyArchive from '~/components/organisms/Archive.vue'
import MyAside from '~/components/organisms/Aside.vue'

import axios from '~/plugins/axios'
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
    MyAside
  },
  asyncData({ params, error }) {
    const getArchiveList = axios.get(`/api/archives`, { params })
    const getCategoryList = axios.get(`/api/categories`)
    return Promise.all([getArchiveList, getCategoryList])
      .then(res => {
        const archives = res[0].data
        const categories = res[1].data

        archives.forEach(archive => {
          archive.datetime = format(archive.create, 'YYYY-MM-DD HH:mm')
          archive.date = format(archive.create, 'MMM DD, YYYY')
          delete archive.body
        })

        return {
          category: params.category,
          archives,
          categories
        }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Not found' })
      })
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
  mounted: () => {
    hljs.initHighlightingOnLoad()
  }
}</script>
