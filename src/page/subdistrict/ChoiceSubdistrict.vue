<template>
  <div>
    选择小区  {{this.$route.query.city}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentCity: ''
    }
  }
}
</script>

<style>

</style>
