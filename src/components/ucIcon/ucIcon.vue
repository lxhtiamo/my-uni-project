<template>
  <text :style="styleObj" class="iconfont" :class="type">
    <slot></slot>
  </text>
</template>

<script>
export default {
  name: 'ucIcon',
  components: {},
  props: {
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#333333',
    },
    size: {
      type: [Number, String],
      default: 16,
    },
  },
  data() {
    return {};
  },

  computed: {
    iconSize() {
      return this.getVal(this.size);
    },
    styleObj() {
      return `color: ${this.color}; font-size: ${this.iconSize};`;
    },
  },
  watch: {},
  methods: {
    getVal(val) {
      const reg = /^[0-9]*$/g;
      return typeof val === 'number' || reg.test(val) ? val + 'px' : val;
    },
  },
};
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
@import '../../common/styles/iconfont.css';
</style>
