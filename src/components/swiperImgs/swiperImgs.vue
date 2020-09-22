<template>
  <view class="swiper-container">
		<!-- #69b6e6 -->
    <swiper 
      class="swiper" 
		  indicator-dots="true" 
		  autoplay="true" 
		  interval="2000" 
		  duration="500"
			circular="true"
			indicator-active-color="#69b6e6">
		  <swiper-item 
				v-for = "(item,i) of imgList" 
				:key = 'i'>
			  <image 
					:src="item" 
					style="width:100%;" 
					mode="widthFix">
				</image>
		  </swiper-item>
	</swiper>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props:{
		imgList: {
			type: Array,
			default: []
		}
	}
});
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss";
</style>
