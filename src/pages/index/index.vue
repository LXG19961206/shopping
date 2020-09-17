<template>
  <view class="content">
    <view class="" id="top">
      <view id="searchBox" class="position-relative w-100 mt-1 p-1">
        <input
          type="text"
          value=""
          id="searchInput"
          placeholder="请输入您要搜索的内容..."
          class=" "
        />
        <image
          :src="searchImgSrc[0]"
          mode=""
          id="searchImg"
          class="myCenter"
          @tap="search"
        ></image>
      </view>
      <view id="goodlist">
        <view id="goodlist_left">
          <text class="gooditem font_white">精选</text>
          <text class="gooditem font_white" @click="goSomewhere(0, `class`)"
            >彩妆护肤</text
          >
          <text class="gooditem font_white" @click="goSomewhere(1, `class`)"
            >食品生鲜</text
          >
          <text class="gooditem font_white" @click="goSomewhere(2, `class`)"
            >服装鞋靴</text
          >
          <text class="gooditem font_white" @click="goSomewhere(4, `class`)"
            >数码家电</text
          >
          <text class="gooditem font_white" @click="goSomewhere(3, `class`)"
            >个人护理</text
          >
          <text class="gooditem font_white" @click="goSomewhere(5, `class`)"
            >家居家纺</text
          >
        </view>
        <view id="goodlist_right" @click="goSomewhere(-1, `class`)">
          <image
            src="../../static/details.png"
            mode="widthFix"
            id="detailsImg"
            class="myCenter"
          ></image>
        </view>
      </view>
      <swiper
        :indicator-dots="true"
        :autoplay="true"
        :interval="2000"
        :duration="300"
        style="width: 100%"
        id="carousel"
        indicator-color="#999"
        indicator-active-color="#fff"
      >
        <swiper-item style="width: 100%">
          <view class="swiper-item">
            <image
              src="../../static/swiper/0 (4).jpg"
              mode="widthFix"
              style="width: 100%"
            ></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image
              src="../../static/swiper/0 (1).jpg"
              mode="widthFix"
              style="width: 100%"
            ></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image
              src="../../static/swiper/0 (3).jpg"
              mode="widthFix"
              style="width: 100%"
            ></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image
              src="../../static/swiper/0 (1).jpg"
              mode="widthFix"
              style="width: 100%"
            ></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image
              src="../../static/swiper/0 (5).jpg"
              mode="widthFix"
              style="width: 100%"
            ></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="flex">
      <view class="p-0 m-15">
        <image
          src="../../static/icon (4).jpg"
          class="w-100"
          mode="widthFix"
        ></image>
        <view class="font-small text-center mt--1">每日上新</view>
      </view>
      <view class="p-0 m-15">
        <image
          src="../../static/icon (1).jpg"
          class="w-100"
          mode="widthFix"
        ></image>
        <view class="font-small text-center mt--1">精选好物</view>
      </view>
      <view class="p-0 m-15">
        <image
          src="../../static/icon (3).jpg"
          class="w-100"
          mode="widthFix"
        ></image>
        <view class="font-small text-center mt--1">超级返利</view>
      </view>
      <view class="p-0 m-15">
        <image
          src="../../static/icon (2).jpg"
          class="w-100"
          mode="widthFix"
        ></image>
        <view class="font-small text-center mt--1">超级特卖</view>
      </view>
      <view class="p-0 m-15">
        <image
          src="../../static/icon (5).jpg"
          class="w-100"
          mode="widthFix"
        ></image>
        <view class="font-small text-center mt--1">升级云店</view>
      </view>
    </view>
    <view class="container">
      <view class="row">
        <view
          class="col-6 no-gutters p-2 border border-light position-relative"
          :key="i"
          v-for="(item, i) in goods"
        >
          <image
            :src="item.img"
            mode="widthFix"
            class="w-100 border-light-radius"
            style="height: 200rpx"
          ></image>
          <image
            class="hot"
            src="../../static/hot.png"
            mode="widthFix"
            v-if="item.price % 2 !== 0"
          ></image>
          <view class="">
            <view class="offerSend" v-if="item.price > 70">包邮</view>
            <view
              class="offerSend"
              v-if="(item.price - item.price2) / item.price2 > 2"
              >特惠</view
            >
            <view class="text-right">
              <text class="text-muted mr-3 throughtLine"
                >¥{{ item.price1 }}</text
              >
              <text class="text-danger">¥{{ item.price }}</text>
            </view>
          </view>
          <view class="text-center font-verySmall">{{ item.pname }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Goods from "../../interface/goods";

export default Vue.extend({
  data() {
    return {
      title: "Hello",
      searchImgSrc: [`../../static/find (1).png`, `../../static/find.png`],
      msg: "",
      goods: {},
    };
  },
  onLoad() {
    let that = this;
  },
  created() {},
  methods: {
    goSomewhere() {
      console.log(`函数还没有写`);
    },
    search(evt: string) {
      this.searchImgSrc = this.searchImgSrc
        .slice(1)
        .concat(this.searchImgSrc[0]);
      setTimeout(() => {
        this.searchImgSrc = [
          `../../static/find (1).png`,
          `../../static/find.png`,
        ];
      }, 1500);
      uni.showToast({
        title: "正在搜索...",
        icon: "loading",
      });
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
