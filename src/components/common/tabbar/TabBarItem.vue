<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="barImage" v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="barImage" v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItme',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#ea68a2'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path)
    },
    activeStyle() {
      return this.isActive ? {color : this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1px;
    height: 49px;
    text-align: center;
    font-size: 13px;
  }
  .tab-bar-item img {
    width: 30px;
    height: 27px;
  }
  .barImage {
    margin: 2px 0 0;
  }
</style>