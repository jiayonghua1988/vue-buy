<template>
  <div class="line">

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    colorline: String,
    size: String,
    left: String
  }
}
</script>

<style>
.line {
  width: 100%;
  height: size;
  background-color: colorline;
}
</style>
