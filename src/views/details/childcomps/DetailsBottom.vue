<template>
  <div class="details-bottom">
    <div class="bot-left">
      <div>
        <div><img src="@/assets/img/details/shop.svg"/></div>
        <div>店铺</div>
      </div>
      <div>
        <div><img src="@/assets/img/details/serveice.svg"/></div>
        客服
      </div>
      <div>
        <div><img src="@/assets/img/details/cart.svg"/></div>
        购物车
      </div>
    </div>
    <div class="bot-right">
      <div class="add-cart" @click="addCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsBottom',
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  .details-bottom {
    height: 49px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    /* line-height: 49px; */
    background-color: #fff;
    box-shadow: 0 0 2px 0 rgba(161, 157, 156, 0.6);
  }
  .bot-left,
  .bot-right{
    flex: 1;
    display: flex;
  }
  .bot-left div,
  .bot-right div{
    flex: 1;
  }
  .bot-left {
    padding: 1px;
    font-size: 12px;
    text-align: center;
  }
  .bot-left img {
    width: 30px;
    height: 30px;
  }
  .bot-right div{
    /* border-radius: 15%; */
    color: #fff;
    line-height: 49px;
    font-size: 14px;
    text-align: center;
  } 
  .add-cart {
    background-color: #f2140c;
  }
  .buy {
    background-color: #ffc30d;
  }
</style>