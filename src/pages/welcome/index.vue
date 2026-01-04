<template>
  <view class="splash-container">
    <!-- 背景图片 -->
    <image class="bg-image" src="http://www.oschina.net/group/huawei/upload/be33d9c4d9ed6b91a9ab84b42bc2f506.jpeg"></image>

    <!-- 跳过按钮 -->
    <view class="skip-btn" @click="skipSplash">跳过 {{ countDown }}s</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      countDown: 5, // 倒计时时间
      timer: null, // 定时器
    };
  },
  onLoad() {
    // 开始倒计时
    this.startCountDown();
  },
  onUnload() {
    // 页面卸载时清除定时器
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    // 开始倒计时
    startCountDown() {
      this.timer = setInterval(() => {
        this.countDown--;
        if (this.countDown <= 0) {
          // 倒计时结束，自动跳转
          this.skipSplash();
        }
      }, 1000);
    },

    // 跳过开场页
    skipSplash() {
      // 清除定时器
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }

      // 跳转到登入，
      uni.reLaunch({
        url: '/pages/login/index',
      });
    },
  },
};
</script>

<style scoped>
.splash-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.bg-image {
  width: 100%;
  height: 100%;
}

.skip-btn {
  position: absolute;
  bottom: 30rpx;
  right: 30rpx;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  padding: 15rpx 30rpx;
  border-radius: 30rpx;
  font-size: 28rpx;
  z-index: 10;
}
</style>
