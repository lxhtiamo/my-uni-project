<template>
  <view class="my-page">
    <!-- 会员信息 -->
    <view class="member-info" @click="towelcome">
      <image class="avatar" src="/static/logo.png"></image>
      <text class="member-level">金卡会员</text>
    </view>

    <!-- 快捷入口 -->
    <view class="shortcut-menu">
      <view class="shortcut-item" @click="navigateTo('orders')">
        <icon type="order" size="24"></icon>
        <text>我的订单</text>
      </view>
      <view class="shortcut-item" @click="navigateTo('cart')">
        <icon type="cart" size="24"></icon>
        <text>购物车</text>
      </view>
      <view class="shortcut-item" @click="navigateTo('coupons')">
        <icon type="coupon" size="24"></icon>
        <text>优惠券</text>
      </view>
      <view class="shortcut-item" @click="navigateTo('favorites')">
        <icon type="favorite" size="24"></icon>
        <text>我的收藏</text>
      </view>
    </view>

    <!-- 功能列表 -->
    <view class="function-list">
      <view class="function-item" @click="navigateTo('newbieBenefits')">
        <text>新人专享福利</text>
        <text class="price">0.1元起</text>
        <icon type="right-arrow" size="16"></icon>
      </view>
      <view class="function-item" @click="navigateTo('address')">
        <text>收货地址</text>
        <icon type="right-arrow" size="16"></icon>
      </view>
      <view class="function-item" @click="navigateTo('messages')">
        <text>消息中心</text>
        <icon type="right-arrow" size="16"></icon>
      </view>
      <view class="function-item" @click="navigateTo('club')">
        <text>会员俱乐部</text>
        <icon type="right-arrow" size="16"></icon>
      </view>
    </view>

    <!-- 底部链接 -->
    <view class="bottom-links">
      <view class="link-item" @click="navigateTo('customerService')">
        <text>在线客服</text>
        <icon type="right-arrow" size="16"></icon>
      </view>
      <view class="link-item" @click="navigateTo('aboutUs')">
        <text>关于我们</text>
        <icon type="right-arrow" size="16"></icon>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MyPage',
  data() {
    return {}
  },
  methods: {
    navigateTo(page) {
      console.log(`Navigate to ${page}`);
    },
    towelcome() {
      uni.navigateTo({
        url: '/pagesA/webview/index'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.my-page {
  padding: 20px;
  background-color: #f5f5f5;

  .member-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .member-level {
      font-size: 16px;
      color: #333;
    }
  }

  .shortcut-menu {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    .shortcut-item {
      text-align: center;

      icon {
        display: block;
        margin-bottom: 5px;
      }

      text {
        font-size: 14px;
        color: #666;
      }
    }
  }

  .function-list, .bottom-links {
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 20px;

    .function-item, .link-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      text {
        font-size: 16px;
        color: #333;
      }

      .price {
        color: #ff5722;
        margin-right: 10px;
      }
    }
  }
}
</style>
