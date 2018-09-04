<template>
  <nav class='navbar'>
    <div class='container'>
      <nuxt-link class='navbar-brand' to='/'>@YuG1224 blog</nuxt-link>
      <nuxt-link to='/archives'>Archives</nuxt-link>
    </div>
  </nav>
</template>

<style lang='scss' scoped>
.navbar {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #007bbb;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;

    .navbar-brand {
      color: #eee;
      padding: 15px 15px 15px 15px;
      font-size: 18px;
      line-height: 20px;
      box-sizing: border-box;
    }

    a {
      color: #eee;
      position: relative;
      padding: 10px 15px;
      margin: auto 0;
      text-decoration: none;
    }
  }
}
</style>
