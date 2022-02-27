<template>
  <div class="person-container">
    <!-- 已登录头部 -->
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image class="avatar" :src="userInfo.photo" round fit="cover" />
          <span class="name">{{ userInfo.name }}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
    </div>
    <!-- 未登录头部 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- 宫格导航 -->
    <van-grid class="grid-nav bottom-blank" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="headline headline-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="headline headline-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>

    <van-cell title="消息通知" is-link url="" />
    <van-cell class="bottom-blank" title="小智同学" is-link url="" />

    <van-cell
      v-if="user"
      class="logout-cell"
      title="退出登录"
      clickable
      @click="onLogout"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '../../api/user'
export default {
  name: 'PersonIndex',
  data() {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    // 如果用户登录了，则请求加载用户信息数据
    if (this.user) {
      console.log('ggg')
      this.loadUserInfo()
    }
  },
  methods: {
    async loadUserInfo() {
      try {
        console.log('用户信息')
        const { data } = await getUserInfo()
        // 逗号隔开哈，+号就看不到信息了，将对象转换为字符串了
        console.log('用户信息', data.data)
        this.userInfo = data.data
      } catch (err) {
        this.$toast('获取数据失败，请稍后重试')
      }
    },
    onLogout() {
      // 引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 $dialog 方法，在所有组件内部都可以直接调用此方法。
      this.$dialog.confirm({
        title: '确认退出吗？'
      })
        .then(() => {
          // on confirm
          // 确认退出：清除登录状态（容器中的 user + 本地存储中的 user）
          this.$store.commit('setUserMes', null)
        })
        .catch(() => {
          // on cancel
          console.log('取消执行这里')
        })
    }
  }
}
</script>

<style scoped lang="less">
.person-container {
  .header {
    height: 361px;
    background: url('~@/assets/banner.png');
    background-size: cover;
  }

  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }

  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          border: 4px solid #fff;
          margin-right: 23px;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
    }
  }

  .grid-nav {
    .grid-item {
      height: 141px;
      i.headline {
        font-size: 45px;
      }
      .headline-shoucang {
        color: #eb5253;
      }
      .headline-lishi {
        color: #ff9d1d;
      }
      span.text {
        font-size: 28px;
      }
    }
  }

  .logout-cell {
    text-align: center;
    color: #d86262;
  }

  .bottom-blank {
    margin-bottom: 9px;
  }
}
</style>
