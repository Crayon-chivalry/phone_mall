<template>
  <div class="submit" :class="{'flex-end': !ischeck}">
    <div class="checkbox" @click="allCheck" v-if="ischeck">
      <img
        src="@/assets/img/tick.svg"
        :class="{ 'check-active': isAllCheck }"
      />
      <div>全选</div>
    </div>

    <div class="submit-right">
      <div class="total" v-if="!isEdit">
        合计：
        <span>¥{{ total }}</span>
      </div>

      <div class="submit-bnt" v-if="!isEdit" @click="submit">
        提交订单
      </div>
      <div class="submit-bnt delete-bnt" v-else @click="remove">
        删除
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmitBar",
  props: {
    total: {
      type: [String, Number],
      default() {
        return 0;
      },
    },
    isAllCheck: {
      type: Boolean,
      default() {
        return false;
      },
    },
    isEdit: {
      type: Boolean,
      default() {
        return false;
      },
    },
    // 是否显示全选按钮
    ischeck: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  methods: {
    remove() {
      this.$emit("remove")
    },
    allCheck() {
      this.$emit("allCheck")
    },
    submit() {
      this.$emit("submit")
    }
  },
  computed: {
    isCheck() {
      return true;
    }
  },
};
</script>

<style scoped>
.submit {
  width: 100%;
  height: 50px;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-top: 1px solid gainsboro;
}
.flex-end {
  justify-content: flex-end;
}
.checkbox {
  display: flex;
  align-items: center;
}
.checkbox img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  margin-right: 8px;
}
.submit-bnt {
  background-color: red;
  color: #fff;
  padding: 10px 16px;
  border-radius: 99rem;
}
.total {
  flex: 1;
  text-align: right;
  padding-right: 14px;
}
.total span {
  font-size: 18px;
  color: red;
}
.check-active {
  background-color: red;
}
.submit-right {
  display: flex;
  align-items: center;
}
.delete-bnt {
  padding: 10px 32px;
}
</style>