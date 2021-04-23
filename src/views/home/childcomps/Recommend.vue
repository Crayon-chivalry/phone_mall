<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <div><img :src="item.url"/></div>
      <div class="text">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* background-color: rgba(201, 199, 199, 0.2); */
  }
  .recommend .recommend-item {
    width: 19%;
    height: 70px;
    text-align: center;
    margin-top: 10px;
  }
  .recommend-item div img {
    width: 30px;
    height: 30px;
  }
  .recommend-item .text {
    margin-top: 5px;
    font-size: 13px;
  }
</style>