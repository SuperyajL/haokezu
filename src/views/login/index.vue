<template>
  <div class="login-container">
    <van-nav-bar title="账号登录" left-arrow />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="username"
        placeholder="请输入账号"
        :rules="userFormRules.username"
        class="inp"
      />
      <van-field
        v-model="user.password"
        name="password"
        placeholder="请输入密码"
        :rules="userFormRules.password"
        class="inp"
      />
      <div style="margin: 16px">
        <van-button block native-type="submit" class="log-btn"
          >登 录</van-button
        >
      </div>
      <a href="javascript:;" class="zhuce">还没有账号，去注册~</a>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        username: 'itheima',
        password: '123456'
      },
      userFormRules: {
        username:
          [{
            required: true,
            message: '请输入账号'
          }],
        password: [{
          required: true,
          message: '请输入密码'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      }
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    async onSubmit () {
      // const user = this.user
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })

      try {
        const { data } = await login(this.user)
        console.log(data.body)
        this.$store.commit('setUser', data.body)
        this.$toast.success('登录成功')
        this.$router.back()
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('账号或密码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试', err)
        }
      }
    }

  }
}
</script>
<style scoped lang="less">
.zhuce {
  display: block;
  text-align: center;
  color: #666;
  font-size: 14px;
}
.log-btn {
  font-size: 17px;
  color: #fff;
  background-color: #21b97a;
  border-radius: 2px;
}
.van-nav-bar {
  font-size: 18px;
  height: 45px;
}
.van-field {
  height: 60px;
  margin: 4px 0;
  font-size: 17px;
}
</style>
