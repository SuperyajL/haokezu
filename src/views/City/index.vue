<template>
  <div class="city-container">
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'city',
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
  .van-cell-group {
    margin-top: 50px;
  }
}
</style>
