export const backTopMixin = {
  data() {
    return {
      showTop: false
    }
  },
  methods: {
    // 返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}