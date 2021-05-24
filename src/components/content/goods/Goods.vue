<template>
  <div class="goods">
    <goods-item v-for="item in goodsList" :key="item.id" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
  name: 'Goods',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>