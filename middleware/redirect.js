import data from '../data/redirect.json'
export default ({ req, redirect }) => {
  const url = data[req.url]
  if (url) {
    redirect(301, `/archives${url}`)
  }
}
