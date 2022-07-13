<template>
  <div class="city-container">
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.city-container {
.van-nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  }
}
.box {
  height: 1000px;
}
</style>
