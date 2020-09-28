<template>
  <view class = 'content'>
    <text 
      class = 'content-text'
      v-if="!isLoading">{{textContent}}
    </text>

    <image
      class = 'content-img' 
      v-else 
      src = "../../static/waiting.png" 
      mode = "" 
    />
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props:{
    activeFunc: {
      default: ()=>{},
      type: Function
    }
  },
  data(){
    return {
      textContent: '上拉加载更多...',
      isLoading: false
    }
  },
  created(){
  }
});
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss";
.content {
  position: absolute;
  bottom: 80px;
  width: 100%;
  text-align: center;

  &-text {
     font-size: 0.7rem;
     color: #999;
  }

  &-img {

  }
}
</style>
