<template>
  <div class="root-wrapper">
    <input type="text" v-model="content" placeholder="请输入" class="input-style" maxlength="20">
    <save-button label="保存" @btnClick="save"></save-button>
  </div>
</template>

<script>
import SaveButton from '../../components/save-button.vue'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    save () {
      this.$store.commit('updateNickname', this.content)
      this.$router.go(-1)
    }
  },
  components: { SaveButton },
  computed: {
    ...mapMutations([
      'updateNickname'
    ])
  }

}
</script>

<style>
.root-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #F4F4F4;
}
.input-style {
  height: 80px;
  background-color: #fff;
  border-bottom: solid 2px #C4C4C4;
  padding: 3px 20px;
  color: #28282C;
  font-size: 32px;
}
</style>
