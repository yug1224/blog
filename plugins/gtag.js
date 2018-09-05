/* global gtag*/
/* eslint-disable */
export default async ({ app }) => {
  app.router.afterEach(to => {
    gtag('config', 'UA-43402891-1', {
      'page_path': to.path
    })
  })
}
