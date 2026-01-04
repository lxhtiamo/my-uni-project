<template>
  <view class="container">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="menu-icon">
        <uc-icon type="icon-left" size="24" color="#333"></uc-icon>
      </view>
      <view class="search-box">
        <uc-icon type="icon-search" size="24" color="#999"></uc-icon>
        <input type="text" placeholder="请输入课程" class="search-input" />
      </view>
      <view class="message-icon">
        <uc-icon type="icon-message-comments" size="24" color="#333"></uc-icon>
      </view>
    </view>

    <!-- 轮播图 -->
    <view class="banner">
      <swiper indicator-dots autoplay interval="3000" duration="500" indicator-active-color="#4CD964">
        <swiper-item>
          <view class="banner-item">
            <image
              src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/3f616af3f34e4351b0bff6752fe4ff67.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1754979569&x-signature=Zi%2FQBYZiw09Uq6s0yFUj0mbv9Dg%3D"
              mode="widthFix"
              class="banner-img"
              alt="终极模考大赛宣传图"></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="banner-item">
            <image
              src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/e9812072bbf74f60a43bae1a4849aafb.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1754981064&x-signature=4Py8iXQx%2BeVtcH5ynRBB3c6nY38%3D"
              mode="widthFix"
              class="banner-img"
              alt="学习资料宣传图"></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="banner-item">
            <image
              src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/63435be8a97f46dbabc88f7e0d12d0b5.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1754981894&x-signature=fozEL%2BYKUNn4bxtqUSUpfIKH83E%3D"
              mode="widthFix"
              class="banner-img"
              alt="考试培训宣传图"></image>
          </view>
        </swiper-item>
      </swiper>
    </view>

    <!-- 功能按钮区 -->
    <view class="function-area">
      <view class="function-item" v-for="(item, index) in functionList" :key="index">
        <view class="function-icon" :style="{backgroundColor: item.bgColor}">
          <ucIcon :type="item.icon" size="24" color="#fff"></ucIcon>
        </view>
        <text class="function-name">{{ item.name }}</text>
      </view>
    </view>

    <!-- 课程推荐区 -->
    <view class="course-section">
      <view class="section-header">
        <text class="section-title">精品通关班</text>
        <view class="more-course">
          <text>更多课程</text>
          <ucIcon type="icon-right" size="14" color="#666"></ucIcon>
        </view>
      </view>

      <view class="course-list">
        <view class="course-item" v-for="(course, index) in courseList" :key="index" :style="{backgroundColor: course.bgColor}">
          <text class="course-title">{{ course.title }}</text>
          <text class="course-subtitle">{{ course.subtitle }}</text>
          <view class="course-image">
            <image :src="course.imageUrl" mode="widthFix" class="course-img" :alt="course.title"></image>
          </view>
          <view class="free-trial">
            <text>免费试学</text>
            <UcIcon type="icon-right" size="14" color="#fff"></UcIcon>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 功能按钮列表
      functionList: [
        {name: '直播课', icon: 'play-circle', bgColor: '#FFCC00'},
        {name: '优选课', icon: 'star', bgColor: '#4CD964'},
        {name: '电子版', icon: 'book', bgColor: '#FF9500'},
        {name: '历年真题', icon: 'file-text', bgColor: '#5856D6'},
        {name: '考试估分', icon: 'trending-up', bgColor: '#FF2D55'},
        {name: '智能组卷', icon: 'list', bgColor: '#007AFF'},
        {name: 'PK赛', icon: 'trophy', bgColor: '#AF52DE'},
        {name: '更多', icon: 'more', bgColor: '#8E8E93'},
      ],
      // 课程列表
      courseList: [
        {
          title: '公务员考试',
          subtitle: '精品通关计划',
          bgColor: '#4CD964',
          imageUrl: '/static/images/course1.png', // 实际项目中替换为真实图片路径
        },
        {
          title: '事业单位',
          subtitle: '快速提分通过',
          bgColor: '#FFCC00',
          imageUrl: '/static/images/course2.png', // 实际项目中替换为真实图片路径
        },
        {
          title: '教师资格证',
          subtitle: '高效备考方案',
          bgColor: '#FF5722',
          imageUrl: '/static/images/course3.png', // 实际项目中替换为真实图片路径
        },
        {
          title: '财会考试',
          subtitle: '专业名师指导',
          bgColor: '#2196F3',
          imageUrl: '/static/images/course4.png', // 实际项目中替换为真实图片路径
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

// 顶部导航栏样式
.header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .menu-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-box {
    flex: 1;
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin: 0 10px;

    .search-icon {
      margin-right: 8px;
    }

    .search-input {
      flex: 1;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      font-size: 14px;
      color: #333;
    }

    .search-input::placeholder {
      color: #999;
    }
  }

  .message-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

// 轮播图样式
.banner {
  width: 100%;
  background-color: #fff;
  padding: 10px 0;

  .banner-item {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .banner-img {
    width: 95%;
    border-radius: 8px;
  }

  /* 轮播图指示器样式 */
  swiper {
    --uni-swiper-indicator-dot-width: 8px;
    --uni-swiper-indicator-dot-height: 8px;
    --uni-swiper-indicator-dot-border-radius: 4px;
    --uni-swiper-indicator-dot-margin: 4px;
    --uni-swiper-indicator-dot-active-width: 20px;
  }
}

// 功能按钮区样式
.function-area {
  display: flex;
  flex-wrap: wrap;
  padding: 16px 10px;
  background-color: #fff;
  margin-top: 10px;

  .function-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;

    .function-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .function-name {
      font-size: 13px;
      color: #333;
    }
  }
}

// 课程推荐区样式
.course-section {
  background-color: #fff;
  margin-top: 10px;
  padding: 16px;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      position: relative;
      padding-left: 8px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 18px;
        background-color: #4cd964;
        border-radius: 2px;
      }
    }

    .more-course {
      display: flex;
      align-items: center;
      color: #666;
      font-size: 14px;
    }
  }

  .course-list {
    display: flex;
    overflow-x: auto;
    padding-bottom: 10px;
    gap: 12px;

    .course-item {
      min-width: 160px;
      border-radius: 8px;
      padding: 16px;
      color: #fff;
      position: relative;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      .course-title {
        font-size: 16px;
        font-weight: bold;
        display: block;
        margin-bottom: 4px;
      }

      .course-subtitle {
        font-size: 12px;
        opacity: 0.9;
        display: block;
        margin-bottom: 12px;
      }

      .course-image {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        margin-bottom: 12px;

        .course-img {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }
      }

      .free-trial {
        display: flex;
        align-items: center;
        font-size: 13px;
        background-color: rgba(255, 255, 255, 0.2);
        width: fit-content;
        padding: 4px 10px;
        border-radius: 12px;
      }
    }
  }
}
</style>
