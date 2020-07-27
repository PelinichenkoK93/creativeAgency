<template>
  <div>
    <headerComp />
    <Nuxt />
  </div>
</template>


<script>
import headerComp from '../components/headerComp'

export default {
  head() {
    return{
      link: [
        { rel: "cannonical", href: `http://localhost:3000${this.$route.path}`}
      ]
    }
  },
  components: {
    headerComp
  }
}
</script>


<style>

</style>
