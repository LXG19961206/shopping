<template>
	<view class='content' :style="'height:'+screenHeight+'px'">
		<table class=''></table>
		<view class="mt-5 mb-3 text-center text-white font-weight-bold letter-space">欢迎您来到精选好物购</view>
		<view class="w-80 m-auto">
			<text class='text-white' @tap='swithLog(true)'>登录</text>
			<text class='float-right text-white'  @tap='swithLog(false)'>注册</text>
			<view id="loginBox" v-if='logOrReg'>
				<view class="inputBox mt-2">
					<input type="text" placeholder="请输入您的手机" class='w-65 m-auto'
					placeholder-style="color:#efefef;font-size:0.85rem;">
					<image src="../../static/phone (2).png" mode="widthFix"
					style='width:50rpx;position:absolute;top:0;left: 40rpx;'></image>
				</view>
				<view class="inputBox mt-4">
					<input type="text" placeholder='请输入您的密码' class='w-65 m-auto'
					placeholder-style="color:#efefef;font-size:0.85rem;">
					<image src="../../static/pswd.png" mode="widthFix"
					style='width:50rpx;position:absolute;top:0;left: 40rpx;'></image>
				</view>
				<view class="mt-3 clear">
					<text class='float-right mr-2 font-small text-white'>忘记密码?</text>
				</view>
				<view class="mt-5 text-center border-0">
					<button class='loginBtn'>登录/注册</button>
				</view>
				<view class="mt-3">
					<view class="text-center font-small text-white">--其他方式登录--</view>
					<view class="flex px-4">
						<view class="w-100 p-2">
							<image class='w-100' src="../../static/QQ.png" mode="widthFix"></image>
						</view>
						<view class="w-100 p-2">
							<image class='w-100'
							src="../../static/wechat1.png" mode="widthFix"></image>
						</view>
						<view class="w-100 p-2">
							<image class='w-100'
							src="../../static/weibo1.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<view id="regBox" v-else>
				<view class="inputBox mt-2">
					<input type="text" placeholder="请输入您的手机" class='w-65 m-auto'
					placeholder-style="color:#efefef;font-size:0.85rem;">
					<image src="../../static/phone (2).png" mode="widthFix"
					style='width:50rpx;position:absolute;top:0;left: 40rpx;'></image>
				</view>
				<view class="inputBox mt-4">
					<input type="text" placeholder='请输入您的密码' class='w-65 m-auto'
					placeholder-style="color:#efefef;font-size:0.85rem;">
					<image src="../../static/pswd.png" mode="widthFix"
					style='width:50rpx;position:absolute;top:0;left: 40rpx;'></image>
				</view>
				<view class="inputBox mt-4">
					<input type="text" placeholder='请再次输入您的密码' class='w-65 m-auto'
					placeholder-style="color:#efefef;font-size:0.85rem;">
					<image src="../../static/pswd2.png" mode="widthFix"
					style='width:50rpx;position:absolute;top:0;left: 40rpx;'></image>
				</view>
				<view class="inputBox mt-4">
					<input type="text" placeholder='请输入验证码' class='w-65 m-auto'
					placeholder-style="color:#efefef;font-size:0.85rem;">
					<image src="../../static/check.png" mode="widthFix"
					style='width:50rpx;position:absolute;top:0;left: 40rpx;'></image>
				</view>
				<view class="mt-3 clear">
					<text class='float-right mr-2 font-small text-white'>忘记密码?</text>
				</view>
				<view class="mt-5 text-center border-0">
					<button class='btn btn-danger border-0 w-50 opa-7 p-2'>登录/注册</button>
				</view>
				<view class="mt-3">
					<view class="text-center font-small text-white">--其他方式登录--</view>
					<view class="flex px-4">
						<view class="w-100 p-2">
							<image class='w-100' src="../../static/QQ.png" mode="widthFix"></image>
						</view>
						<view class="w-100 p-2">
							<image class='w-100'
							src="../../static/wechat1.png" mode="widthFix"></image>
						</view>
						<view class="w-100 p-2">
							<image class='w-100'
							src="../../static/weibo1.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight:'',
				logOrReg:true
			}
		},
		methods: {
			swithLog(bool){
				this.logOrReg=bool
			}
		},
		onShow() {
			const { windowWidth, screenHeight } = uni.getSystemInfoSync();	
			console.log(uni.getSystemInfoSync())
			this.screenHeight=screenHeight
		},
		
	}
</script>

<style scoped>
	
	body{
		 overflow: hidden;
	}
	.content{
	 background:linear-gradient(to bottom,#dad299,#b0dab9);
	 font-weight: 500;
	 font-family: 'yuan';
	
	}
	.w-80{
		margin-top: 60rpx;
		width:80%;
		background: rgba(0,0,0,0.05);
		padding: 20rpx;
	}
	
	.clear:after{
		content:'';
		display: block;
		clear:both;
	}
	.inputBox{
		position: relative;
	}
	.inputBox input{
		color:#fff;
		text-indent: 1rem;
		margin-top: 1rem;
		font-size: 0.9em;
		padding: 0.1rem;
		border-bottom: 1px solid #fff;
	}

	.loginBtn{
		border-radius: 30rpx !important;
		
		height:120rpx;
		line-height: 80rpx;
		margin-top:60rpx;
		background-color: #dc3545;
		opacity: 0.6;
		border:0;
	}
	
</style>
