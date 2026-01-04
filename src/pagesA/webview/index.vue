<template>
  <view style="height: 100%; width: 100%">
    <web-view :src="url"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://www.oschina.net/',
    };
  },
  onLoad(params) {
    if (params.title) {
      uni.setNavigationBarTitle({
        title: params.title,
      });
    }
    if (params.url) {
      this.url = params.url;
    }
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
