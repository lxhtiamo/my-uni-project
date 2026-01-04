<template>
  <view class="message-center">
    <!-- 导航栏 -->
    <view class="navbar">
      <view class="navbar-left">
        <text class="title">消息中心(48)</text>
        <text class="clear-btn">清除未读</text>
      </view>
      <view class="avatar">
        <image src="/static/logo.png" mode="widthFix"></image>
      </view>
    </view>

    <!-- 搜索框 -->
    <view class="search-box">
      <view class="search-icon">
        <icon type="search" size="18" color="#999"></icon>
      </view>
      <input type="text" placeholder="请输入想要搜索的内容" class="search-input" />
    </view>

    <!-- 快捷入口 -->
    <view class="quick-entries">
      <view class="entry-item" v-for="(item, index) in quickEntries" :key="index">
        <view class="entry-icon" :style="{backgroundColor: item.bgColor}">
          <icon :type="item.icon" size="22" color="#fff"></icon>
        </view>
        <text class="entry-name">{{ item.name }}</text>
      </view>
    </view>

    <!-- 消息列表 -->
    <view class="message-list">
      <view class="message-item" v-for="(message, index) in messages" :key="index">
        <view class="message-avatar">
          <image :src="message.avatar" mode="widthFix"></image>
        </view>
        <view class="message-content">
          <view class="message-header">
            <text class="message-title">{{ message.title }}</text>
            <text class="message-time">{{ message.time }}</text>
          </view>
          <text class="message-desc">{{ message.desc }}</text>
        </view>
        <view class="message-unread" v-if="message.unread">
          <view class="unread-dot"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 快捷入口数据
      quickEntries: [
        { name: '优惠券', icon: 'ticket', bgColor: '#FF6B6B' },
        { name: '@我的', icon: 'at', bgColor: '#4ECDC4' },
        { name: '通知', icon: 'bell', bgColor: '#FFD166' },
        { name: '卡包', icon: 'credit-card', bgColor: '#06D6A0' }
      ],
      // 消息列表数据
      messages: [
        {
          avatar: '/static/logo.png',
          title: '物流信息更新',
          desc: '你已有货物到达寄存柜，快来拿取',
          time: '11:54',
          unread: true
        },
        {
          avatar: '/static/logo.png',
          title: '千图图官方旗舰店',
          desc: '年终狂欢继续，低至99元',
          time: '昨天',
          unread: false
        },
        {
          avatar: '/static/logo.png',
          title: '消息助手',
          desc: '谨防诈骗 合理购物',
          time: '星期二',
          unread: true
        },
        {
          avatar: '/static/logo.png',
          title: '水星宇宙',
          desc: '好的呢',
          time: '星期一',
          unread: false
        },
        {
          avatar: '/static/logo.png',
          title: '土星星球专卖店',
          desc: '发货了马上和你说哦',
          time: '2021/02/02',
          unread: false
        },
        {
          avatar: '/static/logo.png',
          title: '火星火爆品',
          desc: '加入会员，即可获得0元购资格',
          time: '2021/02/01',
          unread: false
        },
        {
          avatar: '/static/logo.png',
          title: '木星花店',
          desc: '您预订的鲜花已备好，待配送',
          time: '2021/01/30',
          unread: false
        }
      ]
    };
  },
  onLoad() {
    // 页面加载时的初始化操作
  },
  methods: {
    // 清除未读消息
    clearUnread() {
      this.messages.forEach(message => {
        message.unread = false;
      });
      // 可以在这里添加更新服务器未读状态的逻辑
      uni.showToast({
        title: '已清除所有未读',
        icon: 'none'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.message-center {
  min-height: 100vh;
  background-color: #F5F5F5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* 导航栏样式 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 30rpx;
  background-color: #FFFFFF;
  border-bottom: 1px solid #EEEEEE;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.title {
  font-size: 34rpx;
  font-weight: bold;
  color: #333333;
}

.clear-btn {
  font-size: 26rpx;
  color: #007AFF;
  margin-top: 8rpx;
}

.avatar image {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
}

/* 搜索框样式 */
.search-box {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 60rpx;
  padding: 16rpx 30rpx;
  margin: 20rpx 30rpx;
}

.search-icon {
  margin-right: 16rpx;
  display: flex;
}

.search-input {
  flex: 1;
  font-size: 28rpx;
  color: #333333;
  background-color: transparent;
}

.search-input::placeholder {
  color: #999999;
}

/* 快捷入口样式 */
.quick-entries {
  display: flex;
  justify-content: space-around;
  background-color: #FFFFFF;
  padding: 30rpx 0;
  margin-bottom: 20rpx;
}

.entry-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.entry-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16rpx;
}

.entry-name {
  font-size: 26rpx;
  color: #333333;
}

/* 消息列表样式 */
.message-list {
  background-color: #FFFFFF;
}

.message-item {
  display: flex;
  align-items: center;
  padding: 24rpx 30rpx;
  border-bottom: 1px solid #EEEEEE;
}

.message-avatar image {
  width: 80rpx;
  height: 80rpx;
  border-radius: 12rpx;
}

.message-content {
  flex: 1;
  margin-left: 24rpx;
  display: flex;
  flex-direction: column;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rpx;
}

.message-title {
  font-size: 30rpx;
  color: #333333;
  font-weight: 500;
}

.message-time {
  font-size: 24rpx;
  color: #999999;
}

.message-desc {
  font-size: 26rpx;
  color: #666666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.message-unread {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10rpx;
}

.unread-dot {
  width: 16rpx;
  height: 16rpx;
  background-color: #FF3B30;
  border-radius: 50%;
}
</style>
