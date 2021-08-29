<template>
  <div class="cart">
    <nav-bar><div slot="center">购物车</div></nav-bar>

    <div class="goods">
      <Card
        v-for="item in cartList"
        :key="item.iid"
        :data="item"
        @refresh="getCart"
      />
    </div>

    <SubmitBar 
      class="submit-bar" 
      :total="total"
      :isAllCheck="isAllCheck"
    />

    <main-tab-bar />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import Card from "@/components/cart/Card";
import SubmitBar from "@/components/cart/SubmitBar";

export default {
  name: "Cart",
  components: {
    NavBar,
    MainTabBar,
    Card,
    SubmitBar,
  },
  data() {
    return {
      cartList: [],
      total: 0,
      isAllCheck: "",
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    // 获取购物车数据
    getCart() {
      // 获取缓存购物车数据
      this.cartList = [];
      let cart = JSON.parse(localStorage.getItem("cart"));
      this.cartList = cart;
      // 判断是否存在数据，无则退出
      if(!this.cartList) return
      // 合计
      let total = 0;
      this.cartList.forEach((item) => {
        if (item.check) {
          total += parseInt(item.price) * item.count;
        }
      });
      this.total = total.toFixed(2);
      // 是否全选
      let isAll = this.cartList.find((item) => {
        return item.check == false;
      });
      if(isAll) {
        this.isAllCheck = false
      } else {
        this.isAllCheck = true
      }
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: #ea68a2;
  color: azure;
}
.submit-bar {
  position: fixed;
  bottom: 50px;
}
</style>