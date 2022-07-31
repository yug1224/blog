<template>
  <div class="meta">
    <span class="fas fa-calendar-alt icon"></span>
    <time class="time" :datetime="archive.datetime" pubdate>{{
      archive.date
    }}</time>
    <span class="fas fa-tags icon"></span>
    <span
      v-for="(category, index) in archive.categories"
      :key="index"
      class="category"
    >
      <nuxt-link :to="'/categories/' + category">{{ category }}</nuxt-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    archive: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.meta {
  position: relative;
  color: #333;

  @media (prefers-color-scheme: dark) {
    color: #a9a9a9;
  }

  .icon {
    margin: 0 0.5rem 0 0;
  }

  .time + .icon {
    margin: 0 0.5rem;
  }

  .category + .category ::before {
    content: ' / ';
  }
}
</style>
