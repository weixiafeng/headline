<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar" title="登录" />
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field v-model="user.mobile" name="mobile" placeholder="请输入手机号" :rules="userFormRules.mobile">
        <i slot="left-icon" class="headline headline-shouji"></i>
      </van-field>
      <!-- 法一：矢量图标库里面导入的图标-->
      <van-field v-model="user.code" name="code" placeholder="请输入验证码" :rules="userFormRules.code">
        <i slot="left-icon" class="headline headline-yanzhengma"></i>
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            :time="1000 * 5"
            format="ss s"
          />
          <van-button
            v-else
            class="veryfy-btn"
            native-type="button"
            @click="onSendCode"
            round
            size="small"
            type="default"
            >获取验证码</van-button
          >
        </template>
      </van-field>
      <!-- vant的图标 -->
      <!-- <van-field placeholder="密码"  left-icon="eye-o"/> -->
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendCode } from '../../api/user'
export default {
  name: 'loginPage',
  data() {
    return {
      user: {
        mobile: '',
        code: ''
      },
      userFormRules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          },
          {
            pattern: /^1[3|5|7|8]\d{9}$/,
            message: '手机号格式错误'
          }
        ],
        code: [
          {
            required: true,
            message: '验证码不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式错误'
          }
        ]
      },

      isCountDownShow: false
    }
  },
  methods: {
    async onSubmit() {
      // 1. 展示登陆中loading
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间，默认 2000，0 表示持续展示不关闭
      })

      // 2. 请求登录
      try {
        const { data } = await login(this.user)
        // console.log(data)
        this.$store.commit('setUserMes', data.data)
        this.$toast.success('登录成功')
        // 登录成功，跳转回原来页面
        // back 的方式不严谨，后面讲功能优化的时候再说
        this.$router.back()
      } catch (error) {
        console.log('错误信息' + error)
        if (error.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
    },
    // 3、发送验证码
    async onSendCode() {
      // 1. 校验手机号
      try {
        await this.$refs.loginForm.validate('mobile')
      } catch (error) {
        return console.log('验证失败', error)
        // this.$toast.fail('手机号验证失败，请稍后重试')
      }
      // 2. 验证通过，显示倒计时
      this.isCountDownShow = true
      // 3. 请求发送验证码
      try {
        await sendCode(this.user.mobile)
        // console.log(res)
        this.$toast('发送成功')
      } catch (error) {
        // 发送失败，关闭倒计时
        this.isCountDownShow = false
        if (error.response.status === 429) {
          this.$toast('发送太频繁了，请稍后重试')
        } else {
          this.$toast('发送失败，请稍后重试')
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
.login-container {
  .headline {
    font-size: 37px;
  }
}
.veryfy-btn {
  width: 158px;
  height: 46px;
  line-height: 46px;
  background-color: #ededed;
  font-size: 22px;
  color: #666;
}
.login-btn-wrap {
  padding: 53px 33px;
  .login-btn {
    background-color: #6db4fb;
    border: none;
  }
}
</style>
