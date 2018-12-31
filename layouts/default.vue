<template>
  <nuxt/>
</template>

<script>
export default {
  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        // Google Analytics
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-43402891-1',
          type: 'text/javascript',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-43402891-1');
          `,
          type: 'text/javascript'
        },
        // Google AdSense
        {
          src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          type: 'text/javascript',
          async: true
        },
        {
          innerHTML: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-5265613840106782",
              enable_page_level_ads: true
            });
          `,
          type: 'text/javascript'
        },
        // embedly
        {
          src: '//cdn.embedly.com/widgets/platform.js',
          type: 'text/javascript',
          async: true
        },
        // Twitter Widget
        {
          innerHTML: `
            window.twttr = (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
              if (d.getElementById(id)) return t;
              js = d.createElement(s);
              js.id = id;
              js.src = "https://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js, fjs);
              t._e = [];
              t.ready = function(f) {
                t._e.push(f);
              };
              return t;
            }(document, "script", "twitter-wjs"));
          `,
          type: 'text/javascript'
        }
      ],
      meta: [
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'YuG1224 blog'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'YuG1224 blog'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'プログラミングや日常のこと。'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://blog.yug1224.com/images/profile/profile.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://blog.yug1224.com/'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:site',
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
  word-wrap: break-word;

  .main {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;

    > article {
      width: 100%;
      padding: 0 1.5rem;
      box-sizing: border-box;

      .page-header {
        padding-bottom: 9px;
        margin: 40px 0 20px;
        border-bottom: 1px solid #eee;
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

    .image {
      border: solid 0.5em #fff;
      border-radius: 0.3em;
      box-shadow: rgba(0, 0, 0, 0.15) 0 1px 4px;
      box-sizing: border-box;
      margin: 1rem 0;
      overflow: hidden;
      display: inline-grid;
      max-width: 500px;

      img {
        max-width: 100%;
        position: relative;
        filter: blur(50px);
        transition: filter 1s;

        &.no-blur {
          filter: blur(0px);
        }
      }
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

    pre {
      word-break: break-all;
      word-wrap: break-word;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      padding: 0.5rem;
    }

    :not(pre) {
      code {
        padding: 0.2rem 0.4rem;
        color: #c7254e;
        background-color: #f9f2f4;
        border-radius: 0.3rem;
      }
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
