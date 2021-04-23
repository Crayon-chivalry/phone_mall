<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" @click="activeClick(index)">
      <span :class="{'tab-active': activeIndex === index}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    activeClick(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style scoped>
  .tab-control {
    margin-top: 3px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: flex;
  }
  .tab-control div {
    flex: 1;
  }
  .tab-active {
    border-bottom: 3px solid #ea68a2;
    padding: 5px;
  }
</style>