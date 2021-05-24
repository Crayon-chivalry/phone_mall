<template>
  <div class="details">
    <details-nav-bar class="details-nav" @titleClick="titleClick" ref="navbar"/>
    <scroll ref="scroll" 
            :probeType="3"
            @scroll="themeScroll">
      <details-swiper :swiperImg="detailsSwiper" />
      <details-info :goodInfo="goodInfo"></details-info>
      <details-comm :details-comm="DetailsComm" ref="detailComm"/>
      <details-img :detailsImg="detailsImg" @imgLoaded="imgLoaded" ref="detailImg"/>
    </scroll>
    <back-top @click.native="backTop" v-show="showTop"/>
    <details-bottom/>
  </div>
</template>

<script>
  import  {getDetails, shopInfo, shopComm} from "@/network/details"
  import {debounce} from '@/common/utils'
  import {backTopMixin} from '@/common/mixin'

  import DetailsSwiper from "./childcomps/DetailsSwiper"
  import DetailsNavBar from "./childcomps/DetailsNavBar"
  import DetailsInfo from "./childcomps/DetailsInfo"
  import DetailsImg from './childcomps/DetailsImg'
  import DetailsBottom from './childcomps/DetailsBottom'
  import DetailsComm from './childcomps/DetailsComm'
  
  import Scroll from '@/components/common/scroll/Scroll'
  import BackTop from '@/components/content/backTop/BackTop'

  export default {
    name: "Details",
    // 混入
    mixins: [backTopMixin],
    components: {
      DetailsSwiper,
      DetailsNavBar,
      DetailsInfo,
      DetailsImg,
      Scroll,
      DetailsBottom,
      DetailsComm,
      BackTop
    },
    data() {
      return {
        detailsSwiper: [],
        goodInfo: {},
        detailsImg: [],
        DetailsComm: {},
        themeTopYs: [],
        getThemeTopY: null,
        navIndex: null
      }
    },
    created() {
      this.getDetailsData()
    },
    mounted() {
      // 获取内容的位置
      this.getThemeTopY = debounce(() => {
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.detailComm.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.detailImg.$el.offsetTop-44)
        this.themeTopYs.push(Number.MAX_VALUE)
      },100)
    },
    methods: {
      getDetailsData() {
        getDetails(this.$route.query.iid).then(res => {
          let data = res.data[0]
          // 轮播图
          this.detailsSwiper = data.swiper
          // 商品信息
          this.goodInfo = new shopInfo(data)
          // 商品的详细图
          this.detailsImg = data.detailsImg
          // 评论信息
          this.DetailsComm = new shopComm(data)
        })
      },

      // 图片加载触发
      imgLoaded() {
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      // 点击标题跳转到相关内容
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index])
      },
      themeScroll(position) {
        // console.log(position.y)
        for(let i = 0; i < this.themeTopYs.length-1; i++) {
          if(this.navIndex !== i && -position.y >= this.themeTopYs[i] && -position.y <= this.themeTopYs[i+1]) {
            this.navIndex = i
            this.$refs.navbar.activeIndex = i
          }
        }

        //backTop的显示和隐藏
        this.showTop = (-position.y) > 1000
      }
    }
  }
</script>

<style scoped>
  .details {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .details-nav {
    background-color: #fff;
    position: relative;
    z-index: 9;
  }
  .wrapper {
    height: calc(100vh - 44px - 49px);
  }
</style>