<template>
  <div class="card-item" @click="checkClick">
    <div class="checkbox">
      <img src="@/assets/img/tick.svg" :class="{ 'check-active': data.check }" />
    </div>
    <div class="card-row">
      <img
        :src="data.cover"
      />
      <div class="card-info">
        <div class="card-name">
          {{data.name}}
        </div>
        <div class="card-bottom">
          <div class="price">¥{{data.price}}</div>
          <div class="stepper">
            <div class="stepper-left" @click.stop="reduce">
              -
            </div>
            <div class="stepper-center">
              {{data.count}}
            </div>
            <div class="stepper-right" @click.stop="increase">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isCheck: false,
      count: 0
    };
  },
  methods: {
    checkClick() {
      let cart = JSON.parse(localStorage.getItem('cart'))
      let index = cart.findIndex(item => {
        return item.iid == this.data.iid
      })
      cart[index].check = !cart[index].check
      localStorage.setItem('cart',JSON.stringify(cart))
      // 刷新数据
      this.$emit('refresh')
    },
    // 减
    reduce() {
      let cart = JSON.parse(localStorage.getItem('cart'))
      let index = cart.findIndex(item => {
        return item.iid == this.data.iid
      })
      if(cart[index].count > 1) {
        cart[index].count--
        localStorage.setItem('cart',JSON.stringify(cart))
        // 刷新数据
        this.$emit('refresh')
      }
    },
    // 加
    increase() {
      let cart = JSON.parse(localStorage.getItem('cart'))
      let index = cart.findIndex(item => {
        return item.iid == this.data.iid
      })
      cart[index].count++
      localStorage.setItem('cart',JSON.stringify(cart))
      // 刷新数据
      this.$emit('refresh')
    }
  },
};
</script>

<style scoped>
.card-item {
  display: flex;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}
.card-item img {
  width: 100px;
  height: 100px;
}
.card-row {
  flex: 1;
  display: flex;
}
.checkbox {
  width: 25px;
  text-align: center;
  line-height: 100px;
}
.checkbox img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid gray;
}
.card-name {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.check-active {
  background-color: red;
}
.card-info {
  position: relative;
}
.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}
.price {
  font-size: 16px;
  color: #ea68a2;
}

.stepper {
  display: flex;
  box-sizing: border-box;
  border: 1px solid rgb(194, 190, 190);
  height: 24px;
}
.stepper-center {
  /* padding: 0 16px; */
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stepper-left,
.stepper-right {
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stepper-left {
  border-right: 1px solid rgb(194, 190, 190);
}
.stepper-right {
  border-left: 1px solid rgb(194, 190, 190);
}
</style>