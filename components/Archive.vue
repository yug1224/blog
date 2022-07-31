<template>
  <article>
    <header class="page-header">
      <my-meta :archive="archive" />
    </header>

    <template v-if="archive.body">
      <h1 class="entry-title">{{ archive.title }}</h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="entry-content" v-html="archive.body"></div>
      <footer>
        <my-meta :archive="archive" />
      </footer>
    </template>

    <template v-else-if="archive.intro">
      <h1 class="entry-title">
        <nuxt-link :to="'/archives/' + archive.id">{{
          archive.title
        }}</nuxt-link>
      </h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="entry-content" v-html="archive.body || archive.intro"></div>
      <footer>
        <nuxt-link class="btn more" :to="'/archives/' + archive.id"
          >Read More →</nuxt-link
        >
      </footer>
    </template>

    <template v-else>
      <h3 class="entry-title">
        <nuxt-link :to="'/archives/' + archive.id">{{
          archive.title
        }}</nuxt-link>
      </h3>
    </template>
  </article>
</template>

<script>
import MyMeta from '~/components/Meta.vue'
export default {
  components: {
    MyMeta,
  },
  props: {
    archive: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
}
</style>
