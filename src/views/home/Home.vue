<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">手机商场</div></nav-bar>
    <home-swiper :swipers="swiperImg"/>
    <recommend :recommends="recommends"/>
    <banner :bannerurl="bannerUrl"/>
    <tab-control :titles="['推荐', '新品', '猜你喜欢']"/>
    <goods :hot-list="hotList"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childcomps/HomeSwiper'
import Recommend from './childcomps/Recommend'
import Banner from './childcomps/Banner'
import TabControl from '@/components/content/tabControl/TabControl'
import Goods from '@/components/content/goods/Goods'

import {getHomeData, getGoods} from '@/network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Banner,
    TabControl,
    Goods
  },
  data() {
    return {
      swiperImg: [],
      recommends: [],
      bannerUrl: '',
      hotList: []
    }
  },
  created() {
    this.getHomeDatas()
    this.getGoodsDatas()
  },
  methods: {
    getHomeDatas() {
      getHomeData().then(res => {
        this.swiperImg = res.data.swiper
        this.recommends = res.data.recommend
        this.bannerUrl = res.data.banner
      })
    },
    getGoodsDatas() {
      getGoods().then(res => {
        console.log(res)
        this.hotList = res.data.phoneList.hot
        console.log(this.hotList)
      })
    }
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: #ea68a2;
    color: azure;
  }
</style>