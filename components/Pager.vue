<template>
  <div class="pager">
    <nuxt-link v-if="pager.prev" class="btn prev" :to="pager.prev"
      >← Prev</nuxt-link
    >
    <nuxt-link v-if="pager.next" class="btn next" :to="pager.next"
      >Next →</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    pager: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.pager {
  display: flex;
  margin: 1rem 0;

  .prev {
    margin-right: auto;
  }

  .next {
    margin-left: auto;
  }
}
</style>
