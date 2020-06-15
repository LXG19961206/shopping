<template>
	<view class="lxg-ui-productCard">
		<image 
			class="lxg-ui-productCard-img"
			:src="productImg" 
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
			<text class='lxg-ui-productCard-nameBox-text'><text class='lxg-ui-productCard-nameBox-choice'>精 选</text>{{productText.slice(0,25)}} ...</text>
		</view>
		<view class="lxg-ui-productCard-priceBox">
			<view class="lxg-ui-productCard-priceBox-left">
				<text v-show="isOfferSend">包邮</text>
				<text v-show="isHot">热销</text>
			</view>
			<view class="lxg-ui-productCard-priceBox-right">
				<text>¥{{productPricePast}}</text>
				<text>¥{{productPriceNow}}</text>
			</view>
		</view>
		<view class="text-center font-verySmall"></view>
	</view>
</template>

<script>
	export default {
		props:{
			productImg: {
				default: '',
				type: String 
			},
			productText:{
				default: '',
				type: String
			},
			productPricePast:{
				default: '',
				type: String
			},
			productPriceNow:{
				default: '',
				type: String
			},
			isOfferSend:{
				default: false,
				type: Boolean
			},
			isHot:{
				default: false,
				type: Boolean
			}
		}
	}
</script>

<style lang='scss' scoped>
@import "../../app.scss";
.lxg-ui-productCard {
	@include lxg-mainFont;
	box-sizing: border-box;
	padding: 15rpx;
	width: 100%;
	border:1rpx solid #eee;
	position: relative;
	box-shadow: 0 0 6rpx #ddd;
	&-img {
		width: 100%;
	}
	&-hotIcon {
		position: absolute;
		top: -2%;
		left: 82%;
		width: 20%;
	}
	&-nameBox {
		&-choice {
			padding: 0rpx 5rpx;
			border:1rpx solid #d53369;
			color: #fff;
			font-size: 18rpx;
			height: 10rpx;
			background: #d53369;
			border-radius: 999rpx;
			font-weight: 800;
			box-sizing: border-box;
		}
		&-text {
			font-size: 24rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			ine-clamp: 2;
			-webkit-box-orient: vertical;
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
			color: #D53369;
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
			color: #D53369;
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
