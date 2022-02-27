<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button
        class="search-btn"
        slot="title"
        size="small"
        round
        type="info"
        icon="search"
        >搜索</van-button
      >
    </van-nav-bar>
    <!-- 频道列表 -->
    <van-tabs class="channel-tabs" v-model="active" swipeables>
      <van-tab
        :title="channel.name"
        v-for="channel in channels"
        :key="channel.id"
      >
        <!-- tab中对应的内容 -->
        <ArticleList :channel="channel" />
      </van-tab>

      <div slot="nav-right" class="placeholder"></div>
      <div
        slot="nav-right"
        class="channels-btn"
        @click="isChennelEditShow = true"
      >
        <i class="headline headline-gengduo"></i>
      </div>
    </van-tabs>
    <!-- 频道编辑 -->
    <van-popup
      class="edit-channel-popup"
      v-model="isChennelEditShow"
      position="bottom"
      :style="{ height: '100%' }"
      closeable
      close-icon-position="top-left"
    >
    <channel-edit :my-channels="channels" :active="active" @update-active="onUpdateActive"></channel-edit>
    </van-popup>
    <!-- /频道编辑 -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import { mapState } from 'vuex'
import ArticleList from '../article/article-list'
import ChannelEdit from '../channel/channel-edit'
export default {
  name: 'HomeIndex',
  components: {
    ArticleList,
    ChannelEdit
  },
  data() {
    return {
      active: 0,
      channels: [],
      isChennelEditShow: false // 控制编辑频道弹出层的显示状态
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    this.loadChannels()
  },
  methods: {
    async loadChannels() {
      try {
        if (this.user) {
          const { data } = await getUserChannels()
          // console.log(res)
          this.channels = data.data.channels
        }
      } catch (error) {
        this.$toast('获取频道数据失败')
      }
    },
    onUpdateActive (index, isChennelEditShow = true) {
      // 更新激活的频道项
      this.active = index

      // 关闭编辑频道弹层
      this.isChennelEditShow = isChennelEditShow
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  /deep/ .van-nav-bar__title {
    max-width: unset;
  }

  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
    .van-icon {
      font-size: 32px;
    }
  }
  /deep/ .channel-tabs {
    .van-tab {
      border-right: 1px solid #edeff3;
      min-width: 200px;
      font-size: 30px;
      color: #777777;
    }
    .van-tab--active {
      color: #333333;
    }
    .van-tabs__nav {
      padding-bottom: 0;
    }
    .van-tabs__line {
      bottom: 8px;
      width: 31px !important;
      height: 6px;
      background-color: #3296fa;
    }
    .placeholder {
      flex-shrink: 0;
      width: 66px;
      height: 82px;
      // background-color: #3296fa;
    }
    .channels-btn {
      position: fixed;
      right: 0;
      width: 60px;
      height: 82px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      background-color: rgba(255, 255, 255, 0.902);
      i.headline {
        font-size: 33px;
      }
      // &用于'父选择器'
      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 1px;
        height: 58px;
        background-image: url(~@/assets/gradient-gray-line.png);
        background-size: contain;
      }
    }
  }
}
</style>
