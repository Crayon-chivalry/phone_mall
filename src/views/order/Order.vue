<template>
  <div class="order">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="@/assets/img/back-white.svg"/>
        </div>
      </template>
      <div slot="center">
        我的订单
      </div>
    </nav-bar>

    <div class="tabs">
      <div 
        class="tabs-item" 
        :class="{'tabs-active':active == index}"
        v-for="(item,index) in tabs"
        :key="index"
        @click="onTabs(index)"
      >
        {{item}}
      </div>
    </div>

    <div class="order-list">
      <div class="order-item" v-for="item in 2" :key="item">
        <div class="order-state">
          <div>订单编号：7384787439</div>
          <div>已发货</div>
        </div>
        <div class="goods-item" v-for="item in 2" :key="item">
          <div class="goods-img">
            <img src="http://127.0.0.1:3000/public/img/goods/mi/mi11/swiper/mi11-1.jpg"/>
          </div>
          <div class="goods-info">
            <div class="goods-name">
              小米11 5G 骁龙888 2K AMOLED四曲面柔性屏 1亿像素 55W有线闪充 50W无线闪充 8GB+128GB 蓝色 游戏手机 
            </div>
            <div class="goods-other">
              <div>￥3322</div>
              <div>x3</div>
            </div>
          </div>
        </div>
        <div class="total">
          共 3 件商品，合计：<span>￥12387</span>
        </div>
        <div class="operate">
          <div>查看物流</div>
          <div>再次购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: 'Order',
  components: {
    NavBar
  },
  data() {
    return {
      active: 0,
      tabs: ['全部','待付款','代发货','待收货']
    }
  },
  created() {
    if(this.$route.query.type) {
      this.active = this.$route.query.type
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    onTabs(index) {
      this.active = index
    }
  }
}
</script>

<style scoped>
.order {
  height: 100vh;
  background-color: rgb(241, 240, 240);
}

.nav-bar {
  background-color: #ea68a2;
  color: azure;
}

.back {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back img {
  width: 30px;
  height: 30px;
}

.tabs {
  display: flex;
  background-color: #fff;
}

.tabs div {
  flex: 1;
  text-align: center;
  padding: 10px 0;
}

.tabs-active {
  box-sizing: border-box;
  border-bottom: 2px solid #ea68a2;
}

.order-item {
  padding: 8px;
  background-color: #fff;
  margin-top: 10px;
}

.order-state {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
  color: gray;
  border-bottom: 1px solid rgba(216, 213, 213, .4);
}

.order-state div:last-child {
  color: red;
}

.goods-item {
  display: flex;
}

.goods-img {
  width: 80px;
  height: 80px;
}

.goods-img img {
  width: 100%;
  height: 100%;
}

.goods-info {
  flex: 1;
  height: 33px;
  display: flex;
  margin-top: 10px;
}

.goods-name {
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding-right: 20px;
}

.goods-other div:last-child {
  text-align: right;
  color: gray;
  font-size: 13px;
}

.total {
  font-size: 14px;
  text-align: right;
  color: gray;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(216, 213, 213, .4);
}

.total span {
  font-size: 16px;
  color: red;
}

.operate {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0 0;
}

.operate div {
  width: 100px;
  font-size: 14px;
  margin-left: 10px;
  padding: 6px 0;
  text-align: center;
  border: 1px solid rgba(216, 213, 213, .7);
  border-radius: 99rem;
}
</style>