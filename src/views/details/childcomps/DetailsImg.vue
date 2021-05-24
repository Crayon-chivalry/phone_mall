<template>
  <div class="details-img" v-if="Object.keys(detailsImg).length !== 0">
    <div v-for="(item,index) in detailsImg" :key="index">
      <img :src="item" @load="imgLoad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsImg',
  props: {
    detailsImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      timer: null
    }
  },
  methods: {
    imgLoad() {
      if(this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$emit('imgLoaded')
      },50)
    }
  }
}
</script>

<style scoped>
  .details-img div {
    margin: 0;
  }
  .details-img img{
    width: 100%;
    display: block;
    /* margin: 0; */
  }
</style>