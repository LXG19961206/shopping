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
		<view class="lxg-ui-productCard-priceBox">
			<el-button
				type="danger"
				>是我的</el-button>
			<view class="text-right">
				<text class='text-muted mr-3 throughtLine'></text>
				<text class='text-danger '></text>
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
			}
		}
	}
</script>

<style lang='scss' scoped>
@import "../../app.scss";
.container {
	@include lxg-mainFont;
	box-sizing: border-box;
}
</style>
