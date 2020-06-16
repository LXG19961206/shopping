<template>
	<view class="lxg-ui-productDetails">
		<!-- we add a slide event for imgs , like a swiper  -->
		<view 
			class = "lxg-ui-productDetails-imgsBox"
			@click = "goSwiper"
			:stlye = " swiperObject ">
			<swiper 
				:indicator-dots="true"  
				:interval="3000" 
				:duration="1000">
				<swiper-item style="max-height:400rpx;">
					<view class="swiper-item">
						<image
							class = "lxg-ui-productDetails-img"
							:src="imgsGroup"
							mode="scaleToFill"
							style="width:100%;height:400rpx;">
						</image>
						<text class = "lxg-ui-productDetails-imgNum">1/3</text>
					</view>
				</swiper-item>
				
				<swiper-item>
					<view class="swiper-item">
						<image
							class = "lxg-ui-productDetails-img"
							:src="imgsGroup2">
						</image>
						<text class = "lxg-ui-productDetails-imgNum">2/3</text>
					</view>
				</swiper-item>
				
				<swiper-item>
					<view class="swiper-item">
						<image
							class = "lxg-ui-productDetails-img"
							:src="imgsGroup3">
						</image>
						<text class = "lxg-ui-productDetails-imgNum">3/3</text>
					</view>
				</swiper-item>
				
			</swiper>
		</view>
		<view class="lxg-ui-productDetails-detailsBox">
			<text class="lxg-ui-productDetails-detailsBox-pastPrice"> ¥{{ price }} </text>
			<text class="lxg-ui-productDetails-detailsBox-nowPrice"> ¥{{ price2 }} </text>
			<text class="lxg-ui-productDetails-detailsBox-pname">{{ pname }}</text>
		</view>
		<view class="lxg-ui-productDetails-featureBox">
			<view>
				<image src="" mode=""></image>点赞
				<image src="" mode=""></image>帮我选
				<image src="" mode=""></image>分享
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				moveDistance: 0,
				swiperObject: ''
			}
		},
		methods:{
			goSwiper(){
				this.moveDistance = Number(this.moveDistance) + 33 
				this.swiperObject = `transform:translateX(${this.moveDistance}px);`
				console.log(this.swiperObject);
			}
		},
		props:{
			imgsGroup:{
				default: "",
				type: String
			},
			imgsGroup2:{
				default: "",
				type: String
			},
			imgsGroup3:{
				default: "",
				type: String
			},
			price:{
				default: "",
				type: String
			},
			price2:{
				default: "",
				type: String
			},
			pname:{
				default: "",
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../app.scss";
.lxg-ui-productDetails{
	box-sizing: border-box;
	width: 100%;
	&-imgsBox {
		width:300%;
		overflow: hidden;
		transition: all 0.4s;
		.lxg-ui-productDetails-img {
			width:33.3%;
			float: left;
		}
	}
	&-imgsBox:after {
		@include lxg-clear;
	}
}
.swiper-item{
	position: relative;
	image{
		width: 100%;
		position: absolute;
	}
	.lxg-ui-productDetails-imgNum {
		position: absolute;
		right: 68%;
		top: 230rpx;
		font-size: 24rpx;
		color: white;
		display: inline-block;
		padding: 10rpx 30rpx;
		border-radius: 30rpx;
		background: rgba(0,0,0,0.3);
	}
}
</style>
