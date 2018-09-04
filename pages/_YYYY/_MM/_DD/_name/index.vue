<script>
import data from '~/data/redirect.json'
export default {
  asyncData({ params, redirect }) {
    const { YYYY, MM, DD, name } = params
    const url = data[`/${YYYY}/${MM}/${DD}/${name}`]
    if (url) {
      redirect(301, `/archives${url}`)
    }
  }
}</script>
