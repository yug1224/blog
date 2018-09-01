<template>
  <article>
    <header class='page-header'></header>
    <div class='meta'>
      <span class='glyphicon glyphicon-calendar icon'></span>
      <time class='time' v-bind:datetime='archive.datetime' pubdate>{{archive.date}}</time>
      <span class='glyphicon glyphicon-tag icon'></span>
      <span class='category' v-for='category in archive.categories' :key=category>
        <a class='category' v-bind:href="'/categories/' + category">{{category}}</a>
      </span>
    </div>
    <h1 class='entry-title'>{{archive.title}}</h1>
    <!-- include lib/ad -->
    <div class='entry-content' v-html='archive.body'></div>
    <footer>
      <!-- include lib/share -->
      <div class="meta">
        <span class='glyphicon glyphicon-calendar icon'></span>
        <time class='time' v-bind:datetime='archive.datetime' pubdate>{{archive.date}}</time>
        <span class='glyphicon glyphicon-tag icon'></span>
        <span class='category' v-for='category in archive.categories' :key=category>
          <a class='category' v-bind:href="'/categories/' + category">{{category}}</a>
        </span>
      </div>
    </footer>
  </article>
</template>

<script>
import axios from '~/plugins/axios'
import format from 'date-fns/format'
import md from 'marked'
md.setOptions({
  highlight(code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

export default {
  name: 'id',
  asyncData ({ params, error }) {
    const getArchiveDetail = axios.get(`/api/archives/${params.id}`)
    const getCategoryList = axios.get(`/api/categories`)
    return Promise.all([getArchiveDetail, getCategoryList])
      .then((res) => {
        const archive = res[0].data
        const categoryList = res[1].data

        archive.datetime = format(archive.create, 'YYYY-MM-DD HH:mm')
        archive.date = format(archive.create, 'MMM DD, YYYY')
        archive.body = md(archive.body)

        return {
          archive,
          categoryList
        }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Not found' })
      })
  },
  head() {
    return {}
  }
}</script>

<style scoped>
</style>
