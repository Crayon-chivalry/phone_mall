<template>
  <div class="category">
    <nav-bar class="category-nav"><div slot="center">分类</div></nav-bar>
    <div class="category-box">
      <div class="category-left">
        <div
          v-for="(item, index) in categoryList"
          :key="index"
          class="category-item"
          @click="itemClick(index)"
          :class="{'active': activeIndex === index}"
        >
          {{ item }}
        </div>
      </div>
      <div class="category-right">
        <div class="goods">
          <div class="goods-item" v-for="item in [1,2,3,4,5]" :key="item">
            <img src="http://127.0.0.1:3000/public/img/goods/mi/redmik30s/swiper/swiper1.jpg"/>
            小米11
          </div>
        </div>
      </div>
    </div>
    <main-tab-bar/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import MainTabBar from '@/components/content/mainTabBar/MainTabBar'

export default {
  name: "Category",
  components: {
    NavBar,
    MainTabBar
  },
  data() {
    return {
      categoryList: ["小米", "华为", "苹果", "vivo", "oppo", "魅族", "一加"],
      activeIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.activeIndex = index
    }
  }
};
</script>

<style scoped>
/* .category {
} */
.category-nav {
  background-color: #ea68a2;
  color: azure;
}
.category-box {
  display: flex;
}
.category-left {
  flex: 2;
  height: calc(100vh - 49px - 44px);
  box-sizing: border-box;
  border-right: 1px solid rgba(212, 207, 207, 0.4);
}
.category-right {
  flex: 6;
}
.category-item {
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 10px 0;
}
.active {
  color: #ea68a2;
}
.goods {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
}
.goods-item {
  width: 33.3%;
  text-align: center;
  font-size: 14px;
  margin-top: 6px;
}
.goods-item img {
  width: 100%;
  height: 90px;
}
</style>