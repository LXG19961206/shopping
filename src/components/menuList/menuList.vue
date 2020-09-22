<template>
  <view class="content">
    <view class="list">
      <view 
        class="list-item" 
        v-for='(item,i) of listArr'
        @click = 'switchMenu(i)'
        :class = 'extraClassList[i]' 
        :key='i'>
        {{item}}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Goods from "../../interface/goods";
import { component } from "vue/types/umd";

/**
 * @param {PromiseLike<string>}
*/

export default Vue.extend({
  data() {
    return {
      listArr: [
        "全部",
        "食品",
        "生活用品",
        "劳保用品",
        "医疗用品",
        "其他",
        "更多",
        "哈哈哈"
      ],
      extraClassList:[]
    };
  },
  created(){
    const styleArr:any = new Array(this.listArr.length).fill('')
    styleArr[0] = 'active'
    this.extraClassList = styleArr 
  },
  onShow() {
  },
  methods: {
    switchMenu(index:number){
      this.extraClassList.forEach((item:unknown,i,arr:Array<any>)=>{
        i == index ? arr[i] = 'active' :  arr[i] = ''
      })
      this.extraClassList = [].concat(...this.extraClassList)
    }
  }
});
</script>

<style lang="scss" scoped>
uni-page-body,#app {
  height: 100%;
}

@keyframes active{
  from {
    border-left: 0;
    color: #333;
    background-color: #fff;
  }
  to {
    border-left: 10rpx solid #85c5eb;
    color: #85c5eb;
    background: rgba(0,0,0,0.025);
  }
}

.content {
  background-color: #efefef;
}
.list {
  border-radius: 10rpx;
  width: 30%;
  border: 1px solid #efefef;
  background: #fff;
  height: 100%;
  &-item {
    font-size: 0.85rem;
    color: #333;
    font-weight: 700;
    line-height: 2.5rem;
    height: 2.5rem;
    text-align: center;
  }
  .active {
    font-weight: 1000 !important;
    animation: active 0.2s ease-in-out 0s 1 alternate forwards;
  }
}
</style>
