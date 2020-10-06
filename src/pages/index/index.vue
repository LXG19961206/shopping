<template>
  <view class="content">
    <!-- 顶部搜索栏组件 -->
    <searchInput
      ref="searchInput"
      :goSearch="handleSearch"
      :placeholder="'请输入您要搜索的内容'"
    >
    </searchInput>
    <!-- 轮播图组件 -->
    <swiperImgs :imgList="swiperImgList"></swiperImgs>
    <view v-if="productList[0]">
      <productCard
        class = "productCard"
        v-show="isLoad"
        v-for="(item, i) of productList"
        :key="i"
        :imageUrl="item ? item.img[0] : undefined"
        :pname="item ? item.pname : undefined"
        :isHot="item ? item.isHot : undefined"
        :isOfferSend="item ? item.isOfferSend : undefined"
        :price="item ? item.price : undefined"
        :priceAfterDiscount="item ? item.priceAfterDiscount : undefined">
      </productCard>
    </view>
    <view id="map" style="width:100%;height:500rpx;margin-bottom:200px;"></view>
    <tabBar v-if="hackReset"></tabBar>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Goods from "../../interface/goods";
import { component } from "vue/types/umd";
const $ = (Object as any)["$"];
const that = Vue.prototype;
const echarts = (window as any).echarts
export default Vue.extend({
  data() {
    return {
      number: 3000,
      swiperImgList: [
        "../../static/swiper/0 (1).jpg",
        "../../static/swiper/0 (2).jpg",
        "../../static/swiper/0 (3).jpg",
        "../../static/swiper/0 (4).jpg",
      ],
      hackReset: false,
      productList: [{}],
      isLoad: false,
    };
  },
  onShow() {
    const obj = $.clone({ name: "tom" });
    console.log(obj);
    this.tabReset();
    const temp = (that.$store.state.productData as Array<object>).filter(item => (item as any).class == "cloth");
    temp.forEach((item, i) => {
      const obj: any = Object.create(item);
      const productMsg: Goods = {
        class: obj.class,
        subClass: obj.class2,
        pid: obj.pid,
        pname: obj.pname,
        price: Number(obj.price1),
        priceAfterDiscount: Number(obj.price),
        img: Object.keys(item).filter( elem => /^img.*/.test(String(elem))).map( each => obj[`${each}`]),
        type: JSON.parse(JSON.stringify(obj.type)),
        isHot: true,
        isOfferSend: true,
      };
      this.productList[i] = productMsg;
      this.isLoad = true;
    });
    console.log(this.productList);
  },
  mounted(){
  },
  methods: {
    /**
     * @param func
     * func参数可传,内容是你的筛选规则,会被内部的高阶函数进行解析
     * @example requestData(item => item.pid > 30);
     */
    tabReset() {
      this.hackReset = false;
      setTimeout(() => {
        this.hackReset = true;
      }, 0);
     },
    handleSearch() {
      const el: any = this.$refs.searchInput;
      return new Promise((resolve, reject) => {
        const el: any = this.$refs.searchInput;
        el.type = 2;
        resolve(el);
      }).then((res) => {
        setTimeout(() => {
          const el: any = res;
          el.type = 0;
        }, 30000);
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  background-color: #efefef;
  .productCard:last-child{
    margin-bottom: 200rpx;
  }
}

</style>
