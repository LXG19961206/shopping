<template>
  <view class="content">
    <image 
      src = "../../static/emoji.png" 
      mode = "" 
      class = 'addEmoji'
    />
    <image 
      src = "../../static/icon/icon_personal_dpj.png" 
      mode = "" 
      class = 'addMsg'
      @click = 'addMsg'
    />
    <textarea 
      auto-height = "true"
      maxlength = "1000"
      v-model = "content"
      placeholder = "请输入..."
      class = "chatArea">
    </textarea>
    <button class = 'sendBtn' @click = 'send'>发送</button>

    <view 
      class="msgList"
      v-show = 'this.listShow == true'>
      <view 
        @click = 'sendDefaultMsg(item)'
        class = 'msgList-item'
        v-for = "(item,i) of defaultMsgList"
        :key = 'i'
        v-text = 'item.text'>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
const _this = Vue.prototype

export default Vue.extend({
  data(){
    return {
      defaultMsgList: require('../chatArea/defaultMsg').default,
      listShow: false,
      content: '',
      emojis:['']
    }
  },
  onLoad(){
    
  },
  created(){
    
  },
  methods:{
    send(){
      uni.$emit('addMsg',{
        text: this.content,
        type: 1
      })
      this.content = ''
    },
    sendDefaultMsg(obj:object){
       this.listShow = false
       uni.$emit('addMsg',obj)
    },
    addMsg(){
      this.listShow = true
      this.content = ''
      return true
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss";
.content {
  &::before {
    content: '';
    display: inline-block;
    height: 1rpx;
    width: 100%;
    background-color: #85c5eb;
    position: absolute;
    top: -15rpx;
  }
  width: 100%;
  position: fixed;
  bottom: 15rpx;
  min-height: 70rpx;
  max-height: 300rpx;
  .addEmoji {
    height:60rpx;
    width: 60rpx;
    position: absolute;
    left: 15rpx;
    bottom: 5rpx;
  }
  .addMsg {
    height:60rpx;
    width: 60rpx;
    position: absolute;
    bottom: 5rpx;
    left: 80rpx;
  }
  .chatArea{
    // position: absolute;
    width: 50%;
    overflow-y: hidden;
    margin-left: 20%;
    word-wrap : break-word;
    padding: 10rpx 30rpx;
    border-radius: 40rpx;
    background: #fff;
    color: #666;
    font-size: 0.8rem;
    line-height: 1.2rem;
    max-height: 400rpx;
    overflow: auto;
  }
  .sendBtn {
    background: #85c5eb;
    color: #fff;
    width: 120rpx;
    position: absolute;
    right: 15rpx;
    bottom: 5rpx;
    font-size: 0.7rem;
    outline: none;
    border: 0;
  }
  .msgList {
    position: absolute;
    bottom: 100rpx;
    background: #fff;
    width: 95%;
    height: 400rpx;
    box-sizing: border-box;
    overflow: auto;
    border-radius: 40rpx;
    left: 20rpx;
    &-item {
      color: #666;
      line-height: 1.5rem;
      height: 1.5rem;
      font-size: 0.8rem;
      padding: 10rpx 0;
      text-indent: 60rpx;
      border-bottom: 1px double #ddd;
      position: relative;
      &::after {
        content: '';
        width: 20rpx;
        height: 20rpx;
        @include positionCenterY;
        left: 20rpx;
        background: rgba(random()*255,random()*255,random()*255,random());
        border-radius: 50%;
      }
    }
    &-item:last-child {
      border-bottom: 0 ;
    }
  }
}
</style>
