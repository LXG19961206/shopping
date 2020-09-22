<template>
  <view class='content' :style="height">
    <image 
      v-if='type == 0'
      class='content-avatar' 
      :src="avatar" 
      mode="widthFix" />
    <text v-if='type == 0' class='content-uname'>{{uname}}</text>
    <view 
     ref = 'contentMsg'
     v-if='type == 0'
     class='content-msg'
     v-html = 'text'>
    </view>

    <image 
      v-if='type == 1'
      class='content-avatar_self' 
      :src="avatar" 
      mode="widthFix" />
    <view 
     ref = 'contentMsgII'
     v-if = 'type == 1'
     class = 'content-msg_self'
     v-html = 'text'>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props:{
    avatar: {
      type: String,
      default: '../../static/QQ.png'
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: Number,
      default: 0
    },
    uname: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      height: ''
    }
  },
  mounted(){
    const el = this.$refs.contentMsg || this.$refs.contentMsgII
    const height:number = (el as any).$el.clientHeight + 20 
    this.height = `height:${height + 'px'}`
  }
});
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss";
.content {
  position: relative;
  margin-bottom: 40rpx;
  &-avatar {
    position: absolute;
    margin: 20rpx;
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    border: 1px solid #999;
  }
  &-avatar_self{
    position: absolute;
    right: 0rpx;
    margin: 20rpx;
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    border: 1px solid #999;
  }
  &-uname {
    position: absolute;
    left: 170rpx;
    top: 20rpx;
    font-size: 0.7rem;
    color: #999;
  }
   &-uname_self {
    position: absolute;
    right: 170rpx;
    top: 20rpx;
    font-size: 0.7rem;
    color: #999;
  }
  &-msg {
    max-width: 60%;
    background-color: #fff;
    padding: 20rpx 30rpx;
    border-radius: 15rpx;
    font-size: 0.8rem;
    line-height: 1.25rem;
    position: absolute;
    top: 60rpx;
    left: 170rpx;
    letter-spacing: 4rpx;
    color: #333;
    font-weight: 600;
    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      @include createTriangle(10rpx,#fff);
      left: -20rpx;
      top: 20rpx;
    }
  }
  &-msg_self {
    max-width: 60%;
    background-color: #85c5eb;
    padding: 20rpx 30rpx;
    border-radius: 15rpx;
    font-size: 0.8rem;
    line-height: 1.25rem;
    position: absolute;
    top: 30rpx;
    right: 170rpx;
    letter-spacing: 4rpx;
    color: #efefef;
    font-weight: 1000;
    
    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      @include createTriangleII(10rpx,#85c5eb);
      right: -20rpx;
      top: 20rpx;
    }
  }
}
</style>
