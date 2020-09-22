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
    <tabBar v-if="hackReset"></tabBar>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Goods from "../../interface/goods";
import { component } from "vue/types/umd";

const $ = (Object as any)['$']
export default Vue.extend({
  data() {
    return {
      swiperImgList: [
        "../../static/swiper/0 (1).jpg",
        "../../static/swiper/0 (2).jpg",
        "../../static/swiper/0 (3).jpg",
        "../../static/swiper/0 (4).jpg",
      ],
      hackReset: false,
    };
  },
  onShow() {
    const obj = $.clone({name:"tom"})
    console.log(obj)
    this.tabReset()
  },
  methods: {
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
}
</style>
