<template>
  <view class="login-container">
    <!-- 背景装饰 -->
    <view class="bg-decoration"></view>

    <!-- 登录图标 -->
    <view class="login-icon">
      <view class="icon-circle"></view>
    </view>

    <!-- 标题 -->
    <view class="login-title">欢迎登录</view>

    <!-- 表单区域 -->
    <view class="form-container">
      <!-- 手机号输入 -->
      <view class="input-item">
        <input type="number" placeholder="请输入手机号" v-model="phoneNumber" class="input-field" />
      </view>

      <!-- 验证码输入 -->
      <view class="input-item verify-code-item">
        <input type="number" placeholder="请输入验证码" v-model="verifyCode" class="input-field verify-code" />
        <button class="get-code-btn" :disabled="countingDown" @click="getVerificationCode">
          {{ countingDown ? `${countDownSeconds}s后重发` : '获取验证码' }}
        </button>
      </view>
    </view>

    <!-- 微信登录按钮 -->
    <button class="wechat-login-btn" @click="wechatLogin">
      <view class="wechat-icon"></view>
      <text>微信登录</text>
    </button>

    <!-- 其他选项 -->
    <view class="other-options">
      <text class="other-login" @click="otherLogin">账号登录</text>
      <text class="register" @click="goRegister">立即注册</text>
    </view>
  </view>
</template>

<script>
import {getList} from '@/api/login';

export default {
  data() {
    return {
      phoneNumber: '',
      verifyCode: '',
      countingDown: false,
      countDownSeconds: 60,
    };
  },
  created() {
    //接口示例
    getList({pageNum: 1, pageSize: 30})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    // 获取验证码
    getVerificationCode() {
      // 简单验证手机号格式
      if (!/^1[3-9]\d{9}$/.test(this.phoneNumber)) {
        uni.showToast({
          title: '请输入正确的手机号',
          icon: 'none',
        });
        return;
      }

      // 开始倒计时
      this.countingDown = true;
      const timer = setInterval(() => {
        this.countDownSeconds--;
        if (this.countDownSeconds <= 0) {
          clearInterval(timer);
          this.countingDown = false;
          this.countDownSeconds = 60;
        }
      }, 1000);

      // 实际项目中这里应该调用后端接口发送验证码
      uni.showToast({
        title: '验证码已发送',
        icon: 'none',
      });
    },

    // 微信登录
    wechatLogin() {
      uni.reLaunch({
        url: '/pages/navigation/home/index',
      });
    },

    // 其他登录方式
    otherLogin() {
      uni.showToast({
        title: '账号登录功能待实现',
        icon: 'none',
      });
    },

    // 去注册
    goRegister() {
      uni.navigateTo({
        url: '/pages/register/register',
      });
    },
  },
};
</script>

<style scoped>
/* 基础样式 */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(180deg, #1e88e5 0%, #2196f3 100%);
  position: relative;
  padding-top: 100rpx;
  box-sizing: border-box;
}

/* 背景装饰 */
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>');
  background-repeat: repeat;
  opacity: 0.5;
  z-index: 0;
}

/* 登录图标 */
.login-icon {
  width: 160rpx;
  height: 160rpx;
  position: relative;
  margin-bottom: 60rpx;
  z-index: 1;
}

.icon-circle {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;
}

.icon-circle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background-color: white;
}

.icon-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 30rpx;
  height: 30rpx;
  border-radius: 50%;
  background-color: #2196f3;
}

/* 标题样式 */
.login-title {
  font-size: 48rpx;
  color: white;
  font-weight: 600;
  margin-bottom: 80rpx;
  z-index: 1;
}

/* 表单容器 */
.form-container {
  width: 80%;
  z-index: 1;
}

/* 输入项样式 */
.input-item {
  width: 100%;
  height: 100rpx;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50rpx;
  margin-bottom: 30rpx;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  box-sizing: border-box;
}

.verify-code-item {
  justify-content: space-between;
}

.input-field {
  width: 100%;
  height: 100%;
  color: white;
  font-size: 30rpx;
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.verify-code {
  width: 60%;
}

/* 获取验证码按钮 */
.get-code-btn {
  width: 35%;
  height: 70rpx;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 26rpx;
  border-radius: 35rpx;
  line-height: 70rpx;
  text-align: center;
}

.get-code-btn:disabled {
  background-color: rgba(255, 255, 255, 0.15);
}

/* 微信登录按钮 */
.wechat-login-btn {
  width: 80%;
  height: 100rpx;
  background-color: white;
  color: #2196f3;
  font-size: 32rpx;
  border-radius: 50rpx;
  margin-top: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  z-index: 1;
}

.wechat-icon {
  width: 40rpx;
  height: 40rpx;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%232196F3"><path d="M7.775 20.86c2.37-1.12 3.767-2.658 4.233-3.294.482-.656.85-1.397.85-2.479 0-1.507-.87-2.79-2.233-3.63.154-.437.275-.94.275-1.467 0-2.07-1.672-3.75-3.75-3.75S2 8.45 2 10.52c0 2.05 1.65 3.72 3.675 3.72.36 0 .71-.045 1.035-.135-.06.21-.09.435-.09.66 0 2.625 2.145 4.77 4.77 4.77 1.35 0 2.55-.51 3.405-1.365-.135.03-.27.045-.405.045-.975 0-1.905-.285-2.685-.78-.765-.48-1.29-1.23-1.44-2.1-.12-.72-.03-1.425.27-2.07.03-.06.075-.12.12-.165-.85.51-1.8 0-2.025-1.575-.015-.09-.03-.18-.03-.27 0-.9 1.005-1.35 1.5-.975.21.15.39.36.51.6.135.255.21.54.21.825 0 .69-.495 1.275-1.14 1.545-.165.06-.33.09-.51.09-.165 0-.33-.03-.48-.09.315 1.02.99 1.905 1.905 2.475.915.57 2.01 1.035 3.18 1.365-1.2 1.53-2.865 2.43-4.68 2.43-.3 0-.585-.015-.87-.06z"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 15rpx;
}

/* 其他选项 */
.other-options {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 40rpx;
  z-index: 1;
}

.other-login,
.register {
  color: white;
  font-size: 28rpx;
  opacity: 0.9;
}
</style>
