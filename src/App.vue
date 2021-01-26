<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>

  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">

  .container {
    display: flex;
    flex-direction: column;
  }
  * {
    padding: 0;
    margin: 0;
  }
  input {
    outline: none;
    background: transparent;
    border: 0;
  }
  .flex-row-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .flex-row-center {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .flex-column-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flex-column-between {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>
