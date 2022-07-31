<template>
  <div class="meta">
    <span class="fas fa-calendar-alt icon"></span>
    <time class="time" :datetime="archive.datetime" pubdate>{{
      archive.date
    }}</time>
    <span class="fas fa-tags icon"></span>
    <span
      class="category"
      v-for="(category, index) in archive.categories"
      :key="index"
    >
      <nuxt-link :to="'/categories/' + category">{{ category }}</nuxt-link>
    </span>
  </div>
</template>

<script>
export default {
  props: ['archive'],
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

  // > .icon {
  //   width: 16px;
  //   height: 16px;
  //   line-height: 16px;
  //   font-size: 1.6rem;
  //   text-align: center;
  // }

  // > .author,
  // time,
  // .category {
  //   margin: 0 5px 0 0;
  // }

  // > span.category:not(:last-child):after {
  //   content: ',';
  // }
}
</style>
