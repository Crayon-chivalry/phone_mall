<template>
  <div class="details-info" v-if="Object.keys(goodInfo).length !== 0">
    <div class="info-title">
      <img :src="goodInfo.icon"/>
      {{goodInfo.title}}
    </div>
    <div class="info-price">
      {{goodInfo.price | showPrice}}
    </div>
    <div class="info-other">
      <div>销量 {{goodInfo.sales}}</div>
      <div>收藏 {{goodInfo.collections}}</div>
    </div>
    <div class="info-service">
      <div v-for="(item,index) in goodInfo.service" :key="index">
        <img src="~@/assets/img/other/ok.svg" />
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailsInfo",
    props: {
      goodInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showPrice(price) {
        if(!price) {
          return ''
        }
        return '¥' + price.toFixed(2)
      }
    }
  }
</script>

<style scoped>
  .details-info {
    padding: 15px 5px 5px;
  }
  .info-title {
    font-size: 16px;
    font-weight: bold;
    line-height: 25px;
    color: #000;
  }
  .info-title img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
  .info-price {
    font-size: 24px;
    margin-top: 10px;
    color: red;
  }
  .info-other {
    display: flex;
    font-size: 14px;
    margin: 15px 0 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(201, 195, 195, 0.5);
    justify-content: space-between;
  }
  .info-service {
    display: flex;
    font-size: 14px;
    /* height: 40px; */
    /* line-height: 40px; */
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 2px solid rgba(201, 195, 195, 0.5);
  }
  .info-service div {
    width: 33%;
    margin: 5px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .info-service img {
    height: 20xp;
    width: 20px;
    vertical-align: middle;
  }
</style>