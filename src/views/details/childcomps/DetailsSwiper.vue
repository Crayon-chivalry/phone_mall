<template>
  <swiper>
    <swiper-item v-for="(item, index) in swiperImg" :key="index">
      <a>
        <img :src="item" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper'

  export default {
    name: "DetailsSwiper",
    props: {
      swiperImg: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .indi-item {
    background-color: #ea68a2;
  }
</style>