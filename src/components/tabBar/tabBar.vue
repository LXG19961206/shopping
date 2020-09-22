<template>
  <view class="content">
    <view
      class="content-item"
      v-for="(item, i) of tabList"
      :key="i"
      @click="switchTab(i,item.router)">
      <image 
        class="content-item_img"
        :src="item.usedSrc" 
        mode=""
        :class = "item.toggle" 
      />
      <view></view>
      <text 
        :class = "item.srcAcive == item.usedSrc ? active : ''"
        class="content-item_text">
        {{ item.text }}
      </text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
const _this = Vue.prototype
export default Vue.extend({
  data(){
    return {
      timer: true,
      tabList: [{
          text: '页面1',
          src: '../../static/home (2).png',
          srcActive: '../../static/home (1).png',
          usedSrc: '../../static/home (2).png',
          router: '../../pages/index/index',
          toggle: ''
        },
        {
          text: '页面2',
          src: '../../static/class (4).png',
          srcActive: '../../static/class (1).png',
          usedSrc: '../../static/class (4).png',
          router: '../../pages/menu/menu',
          toggle: ''
        },
        {
          text: '页面3',
          src: '../../static/cart (1).png',
          srcActive: '../../static/cart (2).png',
          usedSrc: '../../static/cart (1).png',
          router: '../../pages/cart/cart',
          toggle: ''
        },
        {
          text: '页面4',
          src: '../../static/aboutme (2).png',
          srcActive: '../../static/aboutme.png',
          usedSrc: '../../static/aboutme (2).png',
          router: '../../pages/myCenter/myCenter',
          toggle: ''
        }]
    }
  },
  onShow(){
    const path = location.href.split('/')[location.href.split('/').length-1]
    this.tabList.forEach((item,i)=>{
      item.router.split('/')[item.router.split('/').length-1] == path 
        ? item.usedSrc = item.srcActive
        : null 
    })
  },
  created(){
    let path:string = location.href.split('/')[location.href.split('/').length-1];
    path == '' ? path = 'index' : null
    // console.log("切割到的路径是" + path)
    this.tabList.forEach((item,i)=>{
      item.router.split('/')[item.router.split('/').length-1] == path 
        ? item.usedSrc = item.srcActive
        : null 
    })
  },
  methods: {
    switchTab(index: number,path: string) {
      path == '' ? path = '../../pages/index/index' : null

      if(!this.timer) return true && _this.$toast('您的操作太频繁啦,歇会儿吧...')
      this.timer = false 
      
      const temp = this.tabList[index]!
      this.tabList.forEach((item,i)=>{ i != index ? item.usedSrc = item.src : null })
      
      temp.usedSrc == temp.src 
      ? temp.usedSrc = temp.srcActive
      : null

      temp.toggle == 'show' 
      ? temp.toggle = 'hide' 
      : temp.toggle = 'show'

      setTimeout(()=>{
        temp.toggle = ''
      },500)

      setTimeout(()=>{
        this.timer = true
      },600)


      uni.navigateTo({
        url: path
      })
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss";
.content {
  box-sizing: border-box;
  @include flexContainer;
  padding-top: 10rpx;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 120rpx;
  background: #fff !important;
  
  .active{
    color: #2440B3;
  }

  &-item {
    text-align: center;

    &_img {
      width: 60rpx;
      height: 60rpx;
    }

    &_text {
      font-size: 0.7rem;
      color: #666;
    }
  }
}

@keyframes hide {
  from {
   transform: scale(1);
  }
  to {
   transform: scale(0);
  }
}

@keyframes show {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.show {
  animation: show 0.2s;
}

.hide {
  animation: hide 0.2s;
}

</style>
