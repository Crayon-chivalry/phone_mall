<template>
  <div class="goods">
    <div v-for="item in hotList" :key="item.id" class="goods-item">
      <img :src="item.swiper[0]" />
      <div class="goods-info">
        <p>{{item.title}}</p>
        <span class="goods-price">{{item.price}}</span>
        <span class="goods-collection">{{item.collection | showCollection}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  props: {
    hotList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    // 处理收藏量，以万为单位
    showCollection(i) {
      return (i / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .goods-item {
    width: 48%;
    /* padding-bottom: 30px; */
    /*background: aqua;*/
    padding: 2px;
  }
  .goods-item img {
    width: 100%;
    height: 200px;
  }
  .goods-info {
    font-size: 12px;
    text-align: center;
    overflow: hidden;
  }
  .goods-info p {
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 2px 0;
  }
  .goods-price {
    color: #ea68a2;
    margin-right: 20px;
  }
  .goods-collection {
    position: relative;
  }
  .goods-collection:before {
    content: '';
    width: 14px;
    height: 14px;
    position: absolute;
    top: 0;
    left: -16px;
    background: url('~@/assets/img/collection.svg') 0 0/14px 14px ;
  }
</style>