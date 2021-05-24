<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.goodsImg" @load="itemImgLoad"/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="goods-price">{{ goodsItem.price }}</span>
      <span class="goods-collection">{{goodsItem.collections | showCollection}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default: {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push({
        path: '/details',
        query: {
          iid: this.goodsItem.iid
        }
      })
    },
    // 监听图片加载
    itemImgLoad() {
      this.$bus.$emit('itemImgLoad')
    }
  },
  filters: {
    // 处理收藏量，以万为单位
    showCollection(i) {
      return (i / 10000).toFixed(1) + '万'
    }
  }
};
</script>

<style scoped>
 .goods-item {
    width: 48%;
    /* padding-bottom: 30px; */
    /*background: aqua;*/
    padding: 5px;
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
    margin: 3px 0;
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