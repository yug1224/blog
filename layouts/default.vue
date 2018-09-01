<template>
  <nuxt/>
</template>

<script>
export default {}</script>

<style lang='scss'>
html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
  font-size: 62.5%;
}

body {
  font-feature-settings: 'pkna';
  font-size: 1.6rem;

  > .navbar {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: #007bbb;

    .navbar-toggle {
      border-color: #eee;
    }

    .navbar-toggle:hover,
    .navbar-toggle:focus {
      background-color: #209bcb;
    }

    .navbar-brand {
      color: #eee;
    }

    .navbar-nav > li > a {
      color: #eee;
    }

    .navbar-collapse {
      border-color: #eee;
    }
  }

  > .container {
    position: relative;
    padding: 0px 10px 50px;

    > .row {
      margin: 0 -10px;
    }
  }

  article.main {
    padding: 0 10px;
  }

  aside {
    padding: 0 10px;

    .panel {
      margin: 40px 0 0;
      border-radius: 0.3em;
    }

    .panel-body {
      text-align: center;
      height: 280px;
    }

    .badge {
      float: right;
    }
  }

  .entry-title {
    margin-top: 0;
    margin-bottom: 30px;
    font-weight: bold;
  }

  .meta {
    position: relative;
    color: #888;

    > .icon {
      width: 16px;
      height: 16px;
      line-height: 16px;
      font-size: 1.6rem;
      text-align: center;
    }

    > .author,
    time,
    .category {
      margin: 0 5px 0 0;
    }

    > span.category:not(:last-child):after {
      content: ',';
    }
  }

  .entry-content {
    video {
      position: relative;
      max-width: 100%;
      min-width: 300px;
    }

    img {
      position: relative;
      max-width: 100%;
      border: solid 0.5em #fff;
      border-radius: 0.3em;
      box-shadow: rgba(0, 0, 0, 0.15) 0 1px 4px;
      box-sizing: border-box;
      margin: 1rem 0;
    }

    h2,
    h3 {
      border-left: 10px solid #007bbb;
      padding-left: 5px;
    }

    h2 {
      border-bottom: 2px solid #007bbb;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .amazlet-box {
      border: solid 1px;
      border-color: #eaeaea #dddddd #d0d0d0;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
      max-width: 468px;

      img {
        min-width: 100%;
        box-shadow: none;
      }
    }

    iframe {
      max-width: 100%;
    }

    .bookmarklet.hatena-embed {
      margin: 0 0 10px;
    }

    .embedly-card {
      padding: 1rem 0;

      .embedly-card-hug {
        border: solid 0.5em #fff;
        border-radius: 0.3em;
        box-shadow: rgba(0, 0, 0, 0.15) 0 1px 4px;
        box-sizing: border-box;
      }
    }

    table {
      border: solid 1px #ddd;
      border-radius: 3px;
      margin: 0 0 10px;
      overflow-wrap: break-word;
      table-layout: auto;
      width: 100%;

      thead {
        background-color: #f5f5f5;
      }

      th,
      td {
        padding: 0.5em;
      }

      tr {
        > th + th,
        > td + td {
          border-left: solid 1px #ddd;
        }
      }

      tbody {
        > tr {
          border-top: solid 1px #ddd;
        }
      }
    }

    pre {
      font-size: 1.2rem;
    }
  }

  .ninja_onebutton {
    padding: 15px 0;
    margin: 0 0 10px;
  }

  .ad {
    padding: 25px 0px;
    width: 100%;
  }

  blockquote {
    font-size: 1.6rem;
  }

  category-element {
    a.link {
      display: block;
    }
  }
}

h1 {
  font-size: 2.6rem;
}

h2 {
  font-size: 2.4rem;
}

h3 {
  font-size: 2.2rem;
}

h4 {
  font-size: 2rem;
}

h5 {
  font-size: 1.8rem;
}

h6 {
  font-size: 1.6rem;
}
</style>
