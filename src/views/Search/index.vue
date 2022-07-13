<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft"/>
    <van-search v-model="value" disabled placeholder="请输入搜索关键词" />
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
      this.$router.push('/home')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
div{
  position: relative;
.van-search{
  z-index: 1;
  position: absolute;
  top: 0;
  width: 275px;
  height: 34px;
  background-color: #fff;
}
}

</style>
