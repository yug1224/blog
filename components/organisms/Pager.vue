<template>
  <div class='pager'>
    <a class='btn prev' :href="'/pages/' + pager.prev" v-if='pager.prev'>← Prev</a>
    <a class='btn next' :href="'/pages/' + pager.next" v-if='pager.next'>Next →</a>
  </div>
</template>

<script>
export default {
  props: ['pager']
}</script>

<style lang='scss' scoped>
.pager {
  display: flex;
  margin: 20px 0;

  .prev {
    margin-right: auto;
  }

  .next {
    margin-left: auto;
  }
}
</style>
