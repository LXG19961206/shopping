

<template>
  <view class="emojis-content">
    <text 
      @click = 'getEmoji(item)'
      class = 'emojis-content-item' 
      v-for = '(item,i) in emojis' 
      :key = 'i'
      v-html = 'item'>
    </text>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
const _this = Vue.prototype
export default Vue.extend({
  data(){
    return {
      emojis:['']
    }
  },
  created(){
    for(let key = 294;key < 348;key++){
      const temp:string = '&#129' + key + ';'
      key!=339 ? this.emojis.push(temp) : null
    }
  },
  methods: {
    getEmoji(item:string){
      uni.$emit('getEmoji',item)
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss";
.emojis-content {
  width: 80%;
  margin: auto;
  padding: 20rpx;
  background: #fff;
  border-radius: 30rpx;

  &-item{
    letter-spacing: 20rpx;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
}
</style>
