<template>
  <aside>
    <section class="panel">
      <div class="panel-header">Category</div>

      <div
        v-for="category in categories"
        :key="category.index"
        class="panel-item"
      >
        <nuxt-link :to="'/categories/' + category[0]">
          <span>{{ category[0] }}</span>
          <span>{{ category[1] }}</span>
        </nuxt-link>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
aside {
  padding: 0 1.5rem;
  width: 200px;
  box-sizing: border-box;

  .panel {
    margin: 40px 0 0;
    border: 1px solid transparent;
    border-color: #ddd;
    border-radius: 0.3rem;

    .panel-header {
      color: #333;
      border-bottom: 1px solid transparent;
      border-color: #ddd;
      background-color: #f5f5f5;
    }

    .panel-item {
      a {
        display: flex;
        justify-content: space-between;

        span:first-child {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    .panel-item + .panel-item {
      border-top: 1px solid transparent;
      border-color: #ddd;
    }

    .panel-header,
    .panel-item {
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
