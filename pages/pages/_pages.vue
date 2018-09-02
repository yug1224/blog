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
import MyHeader from '~/components/organisms/Header.vue'
import MyArchive from '~/components/organisms/Archive.vue'
import MyAside from '~/components/organisms/Aside.vue'
import MyPager from '~/components/organisms/Pager.vue'

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
    MyAside,
    MyPager
  },
  asyncData({ params, error }) {
    const getArchiveList = axios.get(`/api/archives`, { params })
    const getCategoryList = axios.get(`/api/categories`)
    const getPageList = axios.get(`/api/pages`)
    return Promise.all([getArchiveList, getCategoryList, getPageList])
      .then(res => {
        const archives = res[0].data
        const categories = res[1].data
        const pages = res[2].data

        archives.forEach(archive => {
          archive.datetime = format(archive.create, 'YYYY-MM-DD HH:mm')
          archive.date = format(archive.create, 'MMM DD, YYYY')
          archive.intro = md(archive.body).split('<!-- more -->')[0]
          delete archive.body
        })

        const current = +params.pages
        const pager = {
          prev: current - 1
        }
        if (pages > current * 5) {
          pager.next = current + 1
        }

        return {
          archives,
          categories,
          pager
        }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Not found' })
      })
  },
  head() {
    return {}
  },
  mounted: () => {
    hljs.initHighlightingOnLoad()
  }
}</script>
