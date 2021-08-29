<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">手机商城</div></nav-bar>
    <tab-control :titles="['推荐', '新品', '猜你喜欢']"
                   @editGoodsType="editGoodsType"
                   ref="tabControl1"
                   v-show="isTabFixed"/>
    <scroll ref="scroll" 
            :probeType="3" 
            @scroll="homeScroll"
            :pullUpLoad="true"
            @pullingUp="LoadMore">
      <home-swiper :swipers="swiperImg" @swiperImgLoad="swiperImgLoad"/>
      <recommend :recommends="recommends"/>
      <banner :bannerurl="bannerUrl"/>
      <tab-control :titles="['推荐', '新品', '猜你喜欢']"
                   @editGoodsType="editGoodsType"
                   ref="tabControl2"/>
      <goods :goods-list="showGoods"/>
    </scroll>
    <back-top @click.native="backTop" v-show="showTop"/>
    <main-tab-bar/>
  </div>
</template>

<script>
import HomeSwiper from './childcomps/HomeSwiper'
import Recommend from './childcomps/Recommend'
import Banner from './childcomps/Banner'

import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl'
import Goods from '@/components/content/goods/Goods'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'
import MainTabBar from '@/components/content/mainTabBar/MainTabBar'

import {getHomeData, getGoods} from '@/network/home'
import {debounce} from '@/common/utils'
import {backTopMixin} from '@/common/mixin'

export default {
  name: 'Home',
  // 混入
  mixins: [backTopMixin],
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Banner,
    TabControl,
    Goods,
    Scroll,
    BackTop,
    MainTabBar
  },
  data() {
    return {
      swiperImg: [],
      recommends: [],
      bannerUrl: '',
      // 处理首页商品数据
      goods: {
        'hot':{ page : 0, list: [] },
        'new':{ page : 0, list: [] },
        'like':{ page : 0, list: [] }
      },
      activeGood: 'hot',
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  created() {
    this.getHomeDatas()

    this.getGoodsDatas('hot')
    this.getGoodsDatas('new')
    this.getGoodsDatas('like')

    // 提示 ,临时
    // alert("打开你的控制台，切换设备工具栏，最后刷新下，体验最佳！")
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemImgLoad', () => {
      refresh()
    })
  },
  methods: {
    /**
     * 网络请求
     */
    getHomeDatas() {
      getHomeData().then(res => {
        let data = res.data
        this.swiperImg = data.swiper
        this.recommends = data.recommend
        this.bannerUrl = data.banner[0].url
      })
    },
    getGoodsDatas(type) {
      getGoods(type).then(res => {
        this.goods[type].list.push(...res.data)
      })
    },

    /**
     * 事件
     */
    editGoodsType(index) {
      switch (index) {
        case 0:
          this.activeGood = 'hot'
          break;
        case 1:
          this.activeGood = 'new'
          break;
        case 2:
          this.activeGood = 'like'
          break
      }
      this.$refs.tabControl1.activeIndex = index
      this.$refs.tabControl2.activeIndex = index
    },
    // 监听滚动 y 的位置
    homeScroll(position) {
      // backTop 显示与隐藏
      this.showTop = (-position.y) > 1000
      // 吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    // 上拉加载更多
    LoadMore() {
      console.log('加载更多')
      this.$refs.scroll.finishPullUp()
    },
    // 轮播图加载成功调用
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.activeGood].list
    }
  }
}
</script>

<style scoped>
  #home {
    /* position: relative; */
    height: 100vh;
  }
  .tab-control {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .home-nav {
    background-color: #ea68a2;
    color: azure;
  }
  .wrapper {
    /* height: calc(100vh - 93px);
    overflow: hidden; */
    /* margin-top: 44px; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>