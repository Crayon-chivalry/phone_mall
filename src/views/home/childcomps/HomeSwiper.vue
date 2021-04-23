<template>
  <swiper>
    <swiper-item v-for="(item,index) in swipers" :key="index">
      <a>
        <img :src="item"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    swipers: {
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

</style>