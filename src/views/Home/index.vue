<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="http://liufusong.top:8080/img/swiper/1.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://liufusong.top:8080/img/swiper/2.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://liufusong.top:8080/img/swiper/3.png" />
      </van-swipe-item>
    </van-swipe>
    <div class="address-select">
      <van-button type="default" @click="fn">
        北京
        <van-icon name="arrow-down" />
      </van-button>
      <van-button type="default">
        <van-icon name="search" />
        请输入小区或地址
      </van-button>
    </div>
    <van-icon name="browsing-history-o" class="icon" />
    <van-grid>
      <van-grid-item icon="wap-home-o" text="整租" />
      <van-grid-item icon="friends-o" text="合租" />
      <van-grid-item icon="location-o" text="地图找房" />
      <van-grid-item icon="home-o" text="去出租" />
    </van-grid>
    <div class="box">
      <div class="top">
        <p>租房小组</p>
        <span>更多</span>
      </div>
      <ul class="zufang">
        <li>
          <p><van-icon name="photo-o" />图片</p>
          &nbsp;&nbsp;
          <p>家住回龙观<br />归属的感觉</p>
        </li>
        <li>
          <p><van-icon name="photo-o" />图片</p>
          &nbsp;&nbsp;
          <p>宜居四五环<br />大都市生活</p>
        </li>
        <li>
          <p><van-icon name="photo-o" />图片</p>
          &nbsp;&nbsp;
          <p>喧嚣三里屯<br />繁华的背后</p>
        </li>
        <li>
          <p><van-icon name="photo-o" />图片</p>
          <p>文字</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {
  },
  data () {
    return {
      value: '',
      active: 0
    }
  },
  methods: {
    fn () {
      this.$router.push('/city')
    }
  },
  computed: {
  },
  watch: {
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  width: 375px;
  height: 212px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
  }
}
.address-select {
  position: absolute;
  top: 25px;
  display: flex;
  width: 310px;
  margin: 0 10px;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: pink;
  .van-button {
    height: 34px;
    &:nth-child(1) {
      font-size: 14px;
      color: #333;
    }
    &:nth-child(2) {
      flex: 1;
      color: #9c9fa1;
      font-size: 13px;
      text-align: center;
      padding-right: 88px;
      i {
        font-size: 15px;
      }
    }
  }
}
.icon {
  position: absolute;
  top: 29px;
  right: 16px;
  font-size: 25px;
  color: #fff;
}
/deep/ .van-grid-item {
  color: rgb(0, 174, 102);
  .van-grid-item__icon {
    font-size: 35px;
  }
}
/deep/ .van-grid-item__text {
  font-size: 14px;
  color: #333;
}
.van-row {
  display: flex;
  justify-content: space-evenly;
}
.box {
  background-color: #f6f5f6;
  padding: 10px;
  .top {
    font-weight: 600;
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    span {
      margin-top: 15px;
      font-size: 14px;
      color: #787d82;
    }
  }
  .zufang {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 14px;
    .van-icon {
      font-size: 20px;
      color: #39a9ed;
    }
    li {
      width: 160px;
      background-color: #fff;
      display: flex;
      margin-bottom: 10px;
      p {
        // 文字换行
      }
    }
  }
}
</style>
