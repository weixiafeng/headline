<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      :success-text="refreshSuccessText"
      :success-duration="1500"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <article-item
          v-for="(article, index) in list"
          :key="index"
          :article="article"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleItem from '@/components/article/article-item'
import { getArticles } from '@/api/article'
export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      list: [], // 存储列表数据的数组
      loading: false,
      finished: false,
      refreshing: false,
      refreshSuccessText: '刷新成功',
      error: false // 控制列表加载失败的提示状态
    }
  },
  methods: {
    async onLoad() {
      try {
        // console.log(this.channel)
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 1
        })
        // console.log(res)
        const { results } = data.data
        this.list.push(...results)
        // 3. 本次数据加载结束之后要把加载状态设置为结束
        this.loading = false

        // 4. 判断数据是否全部加载完成
        if (results.length) {
          // 更新获取下一页数据的时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
          // 没有数据了，将 finished 设置为 true，不再 load 加载更多了
          this.finished = true
        }
      } catch (error) {
        // 展示错误提示状态
        this.error = true

        // 请求失败了，loading 也需要关闭
        this.loading = false
      }
    },
    async onRefresh() {

    }
  }
}
</script>

<style>
</style>
