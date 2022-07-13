<template>
  <div class="container">
    <header v-if="user">
      <img
        src="@/assets/u=4100275834,2880957501&fm=253&fmt=auto&app=120&f=JPEG.webp"
        alt=""
      />
      <div class="info">
        <div class="pic">
          <img src="@/assets/src=http___b-ssl.duitang.com_uploads_item_201901_19_20190119105005_uJPTs.thumb.700_0.jpeg&refer=http___b-ssl.duitang.webp" alt="" />
        </div>
        <div class="user">
          <div class="name">{{ userInfo.nickname }}</div>
          <van-button type="primary" @click="onLogout">退出</van-button>
        </div>
      </div>
    </header>
    <header v-else>
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      <div class="info">
        <div class="pic">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <div class="user">
          <div class="name">游客</div>
          <van-button type="primary" @click="goLogin">去登录</van-button>
        </div>
      </div>
    </header>
    <div class="grid_squ">
      <van-grid>
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="underway-o" text="看房记录" />
      </van-grid>
      <van-grid>
        <van-grid-item icon="idcard" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="mg">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    goLogin () {
      this.$router.push('/login')
    },
    onLogout () {
      this.$dialog.confirm({
        title: '确认退出吗？'
      })
        .then(() => {
          // on confirm
          this.$store.commit('setUser', null)
        })
        .catch((err) => {
          // on cancel
          console.log(err)
        })
    },
    async loadUserInfo () {
      try {
        const { data } = await getUserInfo()
        console.log(data)
        this.userInfo = data.body
      } catch (err) {
        this.$toast('获取数据失败，请稍后重试')
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  // eslint-disable-next-line no-dupe-keys
  created () {
    if (this.user) {
      this.loadUserInfo()
    }
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.container {
  * {
    box-sizing: border-box;
  }
  header {
    position: relative;
    min-height: 300px;
    img {
      width: 100%;
    }
    .info {
      position: absolute;
      background: #fff;
      width: 85%;
      height: 55%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 10px 3px #ddd;
      margin: 50px auto 0;
      padding: 15px 20px 0 20px;
      text-align: center;
      font-size: 13px;
      .user {
        .van-button {
          margin-top: 10px;
          width: 76px;
          height: 30px;
          border-radius: 5px;
          padding: 15px;
          background-color: #21b97a;
          text-align: center;
        }
        .name {
          margin-top: -20px;
          margin-bottom: 10px;
          color: #333;
        }
      }

      .pic {
        position: relative;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 70px;
        height: 70px;
        border: 5px solid #f5f5f5;
        display: inline-block;
        box-shadow: 0 2px 2px #bdbdbd;
          overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
  .grid_squ {
    // background-color: #21b97a;
    width: 375px;
    height: 190px;
    margin-top: 10px;
    font-size: 13px;
    color: #333;
    .van-grid {
      display: flex;
    }
    .van-grid-item {
      flex: 1;
    }
  }
  .mg {
    width: 375px;
    text-align: center;
    img {
      width: 92%;
    }
  }
}
</style>
