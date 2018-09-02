<template>
  <article>
    <header class='page-header'>
      <my-meta :archive='archive' />
    </header>

    <template v-if='archive.body'>
      <h1 class='entry-title'>{{archive.title}}</h1>
      <div class='entry-content' v-html='archive.body'></div>
      <footer>
        <my-meta :archive='archive'/>
      </footer>
    </template>

    <template v-else-if='archive.intro'>
      <h1 class='entry-title'>
        <a :href="'/archives/' + archive.id">{{archive.title}}</a>
      </h1>
      <div class='entry-content' v-html='archive.body || archive.intro'></div>
      <footer>
        <a class='btn more' :href="'/archives/' + archive.id">Read More →</a>
      </footer>
    </template>

    <template v-else>
      <h3 class='entry-title'>
        <a :href="'/archives/' + archive.id">{{archive.title}}</a>
      </h3>
    </template>

  </article>
</template>

<script>
import MyMeta from '~/components/organisms/Meta.vue'
export default {
  components: {
    MyMeta
  },
  props: ['archive']
}</script>

<style lang='scss' scoped>
footer {
  display: flex;
}
</style>
