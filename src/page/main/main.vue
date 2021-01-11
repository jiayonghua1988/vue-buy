<template>
  <div>
    <p>{{msg}}</p>
    <p>{{this.$store.state.count}}</p>
    <p>userId: {{this.$store.state.userId}}</p>
    <p>userId: {{userId}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: 'aaa'
    }
  },
  computed: {
    ...mapState({
      userId () {
        return this.$store.state.userId
      }
    })
  }
}
</script>

<style>

</style>
