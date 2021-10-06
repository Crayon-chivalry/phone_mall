<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">
        购物车
      </div>
      <div slot="right" class="text-xs" @click="isEdit = !isEdit">
        <span v-if="!isEdit">编辑</span>
        <span v-else>完成</span>
      </div>
    </nav-bar>

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
      :isEdit="isEdit"
      @remove="onRemove"
      @allCheck="allCheck"
      @submit="submit"
    />

    <!-- 弹出框 -->
    <Dialog v-if="isDialog">
      <template v-slot:content>
        确定将这些宝贝删除？
      </template>
      <template v-slot:left>
        <div @click="isDialog = false">
          我再想想
        </div>
      </template>
      <template v-slot:right>
        <div style="color:red" @click="confirmRemove">
          确定
        </div>
      </template>
    </Dialog>

    <!--提示 -->
    <div class="maks" v-if="isTips">
      你还没有选择宝贝哦
    </div>

    <main-tab-bar />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import Card from "@/components/cart/Card";
import SubmitBar from "@/components/cart/SubmitBar";
import Dialog from "@/components/dialog/Dialog"

export default {
  name: "Cart",
  components: {
    NavBar,
    MainTabBar,
    Card,
    SubmitBar,
    Dialog
  },
  data() {
    return {
      cartList: [],
      total: 0,
      isAllCheck: "",
      isEdit: false,
      isDialog: false,
      isTips: false
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
    onRemove() {
      // 判断是否选择商品
      let state = this.cartList.findIndex(item => {
        return item.check == true
      })
      if(state == -1) {
        this.isTips = true
        setTimeout(() => {
          this.isTips = false
        },1000)
        return 
      }
      this.isDialog = true
    },
    // 确认删除商品
    confirmRemove() {
      let cart = this.cartList.filter(item => {
        return item.check == false
      })
      this.cartList = cart
      this.isDialog = false
      localStorage.setItem('cart',JSON.stringify(cart))
      this.getCart()
    },
    // 全选
    allCheck() {
      let state = this.cartList.findIndex(item => {
        return item.check == false
      })
      let cart = this.cartList
      cart.forEach(item => {
        if(state == -1) {
          item.check = false
        } else {
          item.check = true
        }
      })
      localStorage.setItem('cart',JSON.stringify(cart))
      this.getCart()
    },
    // 提交订单
    submit() {
      let state = this.cartList.findIndex(item => {
        return item.check == true
      })
      if(state == -1) {
        this.isTips = true
        setTimeout(() => {
          this.isTips = false
        },1000)
      } else {
        this.$router.push("SubmitOrder")
      }
    }
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
  background-color: #fff;
}
.text-xs {
  font-size: 14px;
}

.maks {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 40px;
  margin-top: -20px;
  margin-left: -80px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: rgb(78, 77, 77);
}
</style>