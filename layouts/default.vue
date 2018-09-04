<template>
  <nuxt/>
</template>

<script>
export default {
  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-43402891-1", "auto");ga("send", "pageview");',
          type: 'text/javascript'
        }
      ],
      meta: [
        {
          property: 'twitter:card',
          content: 'summary'
        },
        {
          property: 'twitter:site',
          content: '@YuG1224'
        }
      ]
    }
  }
}</script>

<style lang='scss'>
html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
  font-size: 62.5%;
  margin: 0;
}

body {
  font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', 'Hiragino Sans', 'ヒラギノ角ゴシック', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  font-feature-settings: 'pkna';
  font-size: 1.6rem;
  color: #333;

  .main {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;

    > article {
      width: calc(100%-200px);
      padding: 0 15px;
      box-sizing: border-box;

      .page-header {
        padding-bottom: 9px;
        margin: 40px 0 20px;
        border-bottom: 1px solid #eee;
      }
    }

    @media only screen and (max-width: 768px) {
      article,
      aside {
        width: 100%;
      }
    }
  }

  .entry-title {
    margin-top: 0;
    margin-bottom: 30px;
    font-weight: bold;
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

     blockquote {
      font-size: 1.6rem;
      border-left: 5px solid #eee;
      padding: 0 1rem;
      margin: 0;
    }

    p code {
      padding: 0.2rem 0.4rem;
      color: #c7254e;
      background-color: #f9f2f4;
      border-radius: 0.3rem;
    }
    
    pre {
      word-break: break-all;
      word-wrap: break-word;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      padding: 0.5rem;
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

  category-element {
    a.link {
      display: block;
    }
  }

  .btn {
    border: 1px solid transparent;
    border-color: #ccc;
    border-radius: 0.3rem;
    padding: 6px 12px;
    color: #333;

    &:hover {
      background-color: #ccc;
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

a {
  color: #337ab7;
  text-decoration: none;
}
</style>
