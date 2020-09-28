<template>
  <view class="content">{{num}}</view>
</template>

<script lang="ts">
import Vue from "vue";
import Goods from "../../interface/goods";
import { component } from "vue/types/umd";

export default Vue.extend({
  data() {
    return {
      num: 0
    }; 
  },
  props:{
    number:{
      type: Number
    }
  },
  created() {
    this.num = this.number
    console.log(this.number)
    const copyData = Number(this.num)
      const chunk = copyData / 100
      this.num = 0
      let timer:number|null = setInterval(()=>{
        copyData - this.num < chunk 
        ? this.num = copyData
        : this.num += chunk

        copyData - this.num < chunk 
        ? clearInterval(timer as any)
        : null
      },10)
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.content {
  display: inline;
  color: red;
}
</style>
