<template>
  <div class='pager'>
    <nuxt-link class='btn prev' :to="pager.prev" v-if='pager.prev'>← Prev</nuxt-link>
    <nuxt-link class='btn next' :to="pager.next" v-if='pager.next'>Next →</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['pager']
}</script>

<style lang='scss' scoped>
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
