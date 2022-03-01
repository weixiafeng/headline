<template>
  <div class='container'>
    <van-nav-bar fixed border title="视频" left-arrow @click-left="$router.back()" />
    <div class="wrapper">
      <div class="video-item van-hairline--bottom">
        <p>极致简洁的微前端框架-京东MicroApp开源了</p>
        <a href="javascript:;" class="play">
          <van-icon name="play-circle-o" />
          <video src="https://ips.ifeng.com/video19.ifeng.com/video09/2021/05/26/p6803231351488126976-102-8-161249.mp4?reqtype=tsl&vid=2c791e3b-444e-4578-83e3-f4808228ae3b&uid=0puFR4&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=&cat=&ptype=&platform=pc&sourceType=h5&dt=1622096387396&gid=6a4poXmsep1E&sign=39f76885daca6503ebf90acbfffc1ff1&tm=1622096387396"></video>
        </a>
        <span>1883次播放</span>
      </div>
      <div class="video-item van-hairline--bottom">
        <p>一分钟带你了解前端</p>
        <a href="javascript:;" class="play">
          <van-icon name="play-circle-o" />
          <video src="https://ips.ifeng.com/video19.ifeng.com/video09/2021/05/26/p6803268684325330944-102-8-184104.mp4?reqtype=tsl&vid=ec74b1e4-d1fa-488b-aaf5-71984ca7d13e&uid=1Vun5L&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=&cat=&ptype=&platform=pc&sourceType=h5&dt=1622096310639&gid=fg3vsXmseXFv&sign=38e7c790561e1fd1b57e61a1cbd8031c&tm=1622096310639"></video>
        </a>
        <span>1673次播放</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoIndex',
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
    .video-item {
      padding: 10px 0;
      p {
        font-size: 16px;
        padding-bottom: 5px;
      }
      span {
        font-size: 12px;
        height: 20px;
        color: #999;
      }
      video {
        width: 100%;
        border-radius: 4px;
      }
      a {
        display: block;
        position: relative;
        .van-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          color: #fff;
          font-size: 40px;
        }
      }
    }
  }
}
</style>
