<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- 标签导航栏 -->
    <!-- route: 开启路由模式 -->
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/">
        <i slot="icon" class="headline headline-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/conver">
        <i slot="icon" class="headline headline-wenda"></i>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <i slot="icon" class="headline headline-shipin"></i>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item to="/person"
        ><i slot="icon" class="headline headline-wode"></i>
        <span class="text">{{ $store.state.user ? '我的' : '未登录' }}</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data() {
    return {
      // active:0
    }
  }
}
</script>

<style scoped lang="less">
.layout-container {
  .layout-tabbar {
    i.headline {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
