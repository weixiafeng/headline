<template>
  <div class='container'>
    <van-nav-bar fixed border title="问答" left-arrow @click-left="$router.back()" />
    <div class="wrapper">
      <div class="question-item van-hairline--bottom" v-for="i in 5" :key="i">
        <div class="content">
          <div class="left">
            <p class="van-multi-ellipsis--l2">你对前端的未来的就业前景有什么看法？</p>
            <span>赞同 3000+</span>
            <span>评论 300+</span>
            <span>5小时前</span>
          </div>
          <div class="right">
            <img src="https://pic1.zhimg.com/v2-21cc1bf0ff22f54cfe781e0a633b8b73_1440w.jpg?source=172ae18b" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conversation',
  created () {
    console.log('VideoPage')
  }
}
</script>

<style scoped lang='less'>
.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 46px 0 50px;
  .wrapper {
    width: 100%;
    height: 100%;
    padding: 30px 16px;
    overflow-y: auto;
    .question-item {
      padding: 16px 0;
      p {
        font-size: 16px;
        padding-bottom: 5px;
      }
      span {
        font-size: 12px;
        color: #999;
        margin-right: 10px;
        display: inline-block;
        margin-top: 5px;
      }
      .content {
        display: flex;
        .left {
          width: 67%;
          padding-right: 16px;
        }
        .right {
          width: 33%;
          img {
            width: 100%;
            height: 2rem;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
