<template>
  <div class="search-container">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <div class="search-box">
      <van-button type="default" @click="goCs">
        <span>杭州</span>
        <van-icon name="arrow-down" />
      </van-button>
      <div class="last">
        <van-icon name="search" />
        <span>请输入小区或地址</span>
      </div>
    </div>
    <van-icon name="upgrade" class="iclc" />
    <van-sticky>
      <van-dropdown-menu active-color="rgba(33,185,122)">
        <van-dropdown-item title="区域" ref="item">
          <div class="btn-box">
            <van-button type="primary" @click="onConfirm">取消</van-button>
            <van-button type="primary" @click="onConfirm">确定</van-button>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="方式" ref="item1">
          <div class="btn-box">
            <van-button type="primary" @click="onConfirm1">取消</van-button>
            <van-button type="primary" @click="onConfirm1">确定</van-button>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="租金" ref="item2">
          <div class="btn-box">
            <van-button type="primary" @click="onConfirm2">取消</van-button>
            <van-button type="primary" @click="onConfirm2">确定</van-button>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" disabled/>

        <van-cell @click="showPopup"
          >筛选 <van-icon name="arrow-down" class="sx-icon"
        /></van-cell>
        <van-popup
          v-model="show"
          position="right"
          :style="{ width: '80%', height: '100%' }"
        >
          <div class="btn-box">
            <van-button type="primary">清除</van-button>
            <van-button type="primary">确定</van-button>
          </div>
        </van-popup>
      </van-dropdown-menu>
    </van-sticky>
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      show: false
    }
  },
  methods: {
    goCs () {
      this.$router.push('/city')
    },
    showPopup () {
      this.show = true
    },
    onClickLeft () {
      this.$router.push('/home')
    },
    onConfirm () {
      this.$refs.item.toggle()
    },
    onConfirm1 () {
      this.$refs.item1.toggle()
    },
    onConfirm2 () {
      this.$refs.item2.toggle()
    },
    onConfirm3 () {
      this.$refs.item3.toggle()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.search-container {
  * {
    box-sizing: border-box;
  }
  .search-box {
    position: absolute;
    top: 7px;
    width: 260px;
    height: 34px;
    z-index: 1;
    margin: 0 10px 0 50px;
    padding: 5px 5px 5px 8px;
    border-radius: 3px;
    background-color: #fff;
    .van-button {
      position: absolute;
      top: 0;
      left: 0;
      height: 34px;
      padding: 8px;
      font-size: 14px;
      .van-icon {
        margin-left: 2px;
        font-size: 12px;
        color: #7f7f80;
      }
    }
    .last {
      margin-left: 59px;
      padding-left: 4px;
      font-size: 13px;
      color: #9c9fa1;
      line-height: 25px;
      .van-icon {
        margin-right: 4px;
        font-size: 15px;
      }
    }
  }
  .iclc {
    z-index: 1;
    position: absolute;
    top: 12px;
    right: 25px;
    font-size: 25px;
    color: #fff;
  }
  .test {
    height: 5000px;
  }
  .btn-box {
    display: flex;
    .van-button {
      flex: 1;
      height: 50px;
      font-size: 18px;
      color: #21b97a;
      border: #fff;
      background-color: #fff;
      &:nth-child(2) {
        flex: 2;
        color: #fff;
        background-color: #21b97a;
      }
    }
  }
}
.van-dropdown-menu {
  position: relative;
  .van-cell {
    width: 93.8px;
    height: 48px;
    line-height: 28px;
    font-size: 15px;
    padding-left: 30px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .van-popup {
    .btn-box {
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  }
  .sx-icon {
    position: absolute;
    right: 0;
    top: 8px;
    font-size: 8px;
    color: #dcdee0;
    z-index: 1;
  }
}
</style>
