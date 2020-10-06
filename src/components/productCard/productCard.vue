<template>
	<view class="lxg-ui-productCard">
		<image 
			class="lxg-ui-productCard-img"
			:src="imageUrl" 
			mode="widthFix"  
			style='height:200rpx;'>
		</image>
		<image 
			class='lxg-ui-productCard-hotIcon'
			src="../../static/hot.png" 
			mode="widthFix">
		</image>
		<view
		class="lxg-ui-productCard-nameBox">
			<text class='lxg-ui-productCard-nameBox-text'><text class='lxg-ui-productCard-nameBox-choice'>精 选</text>{{pname.slice(0,25)}} ...</text>
		</view>
		<view class="lxg-ui-productCard-priceBox">
			<view class="lxg-ui-productCard-priceBox-left">
				<text v-show="isOfferSend">包邮</text>
				<text v-show="isHot">热销</text>
			</view>
			<view class="lxg-ui-productCard-priceBox-right">
				<text>¥{{price}}</text>
				<text>¥{{priceAfterDiscount}}</text>
			</view>
		</view>
		<view class="text-center font-verySmall"></view>
	</view>
</template>

<script lang="ts">
import Vue from "vue";
import Goods from "../../interface/goods";
import { component } from "vue/types/umd";

const $ = (Object as any)["$"];
const that = Vue.prototype
export default Vue.extend({
  props:{
    imageUrl:{
      default: '',
      type: String
    },
    pname: {
      default: '测试内容的内容',
      type: String
    },
    isOfferSend: {
      default: true,
      type: Boolean
    },
    isHot:{
      default: true,
      type: Boolean
    },
    price:{
      default: 0.00,
      type: Number
    },
    priceAfterDiscount:{
      default: 0.00,
      type: Number
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../../scss/base';
.lxg-ui-productCard {
  background: #fff;
	box-sizing: border-box;
	padding: 15rpx;
	width: 50%;
	border:1rpx solid #eee;
	position: relative;
	box-shadow: 0 0 6rpx #ddd;
  display: inline-block;
	&-img {
		width: 100%;
    height: 180rpx;
	}
	&-hotIcon {
		position: absolute;
		top: -2%;
		left: 82%;
		width: 18%;
	}
	&-nameBox {
		&-choice {
			border:1rpx solid #C82333;
			color: #fff;
			font-size: 18rpx;
			height: 10rpx;
			background: #C82333;
			border-radius: 999rpx;
			font-weight: 800;
			box-sizing: border-box;
			padding: 0rpx 10rpx;
		}
		&-text {
			font-size: 24rpx;
      line-height: 1rem;
      @include doubleLines;
		}
	}
	&-priceBox{
		margin-top: 10rpx;
		display: flex;
		position: relative;
		&-left > text {
			padding: 5rpx 5rpx;
			border: #d53369 1rpx solid;
			height:20rpx;
			font-size: 16rpx;
			color: #C82333;
			border-radius: 10rpx;
			margin: 5rpx;
			box-sizing: border-box;
		}
		&-right {
			position: absolute;
			right: 5%;
		}
		&-right > text:last-child{
			font-weight: 800;
			color: #C82333;
			margin-left: 15rpx;	
		}
		&-right > text:first-child{
			font-weight: 800;
			color: #aaa;
			text-decoration: line-through;
		}
	}
}
</style>
