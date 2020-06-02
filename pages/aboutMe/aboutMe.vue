<template>
	<view class="content">
		<view>
			<image src="../../static/icon/ic_appbar_msg_white.png" mode="" class='icon m-2'></image>
			<image src="../../static/icon/ic_appbar_settings_white.png" mode="" class='icon m-2 float-right'></image>
		</view>
		<view class="card  bg-white w-90 m-auto border-0 border-light-radius">
			
			<view class="row">
				<image src="../../static/icon/ic_default_user_avatar_brand.png"
				class='userHeader m-2 ml-4'  mode="widthFix"></image>
				<view class="mt-4 ml-1 font-small font-weight-bold">
					{{userInfo.uname||'注册/登录'}}
				</view>
			</view>
			<view class="flex p-1">
				<view class="text-center p-1">
					<view class='font-weight-bold'>0</view>
					<view class='font-small-gray font-weight-bold'>钱包金额(元)</view>
				</view>
				<view class="text-center p-1 ">
					<view class='font-weight-bold'>0</view>
					<view class='font-small-gray font-weight-bold'>累计已省(元)</view>
				</view>
				<view class="text-center p-1">
					<view class='font-weight-bold'>0</view>
					<view class='font-small-gray font-weight-bold'>购物红包(元)</view>
				</view>
			</view>
		</view>
		<view class="m-2"></view>
		<view class="bg-white w-90 m-auto border-0 border-light-radius clear ">
			<view class="font-weight-bold m-2 font-small float-left">我的订单</view>
			<view class="font-weight-bold m-2 font-small-gray float-right font-tiny right">查看全部</view>
			<view class="mt-3"></view>
			<view class='flex w-100 p-2'>
				<view class="">
					<image src='../../static/icon/icon_personal_dfk.png' mode="widthFix" class='w-100'></image>
					<view class="font-small-gray m--1">待付款</view>
				</view>
				<view class="">
					<image src='../../static/icon/icon_personal_dsh.png' mode="widthFix" class='w-100'></image>
					<view class="font-small-gray m--1">待收货</view>
				</view>
				<view class="">
					<image src='../../static/icon/icon_personal_dfh.png' mode="widthFix" class='w-100'></image>
					<view class="font-small-gray m--1">待发货</view>
				</view>
				<view class="">
					<image src='../../static/icon/icon_personal_dpj.png' mode="widthFix" class='w-100'></image>
					<view class="font-small-gray m--1">待评价</view>
				</view>
				<view class="">
					<image src='../../static/icon/icon_personal_return.png' mode="widthFix" class='w-100'></image>
					<view class="font-small-gray m--1">待售后</view>
				</view>
			</view>
			<view class="m-1"></view>
		</view>
		<view class="mt-2"></view>
		<view class=" w-90 m-auto bg-white border-0 border-light-radius">
			<table></table>
			<view class="mt-1"></view>
			<text class='font-weight-bold font-small mx-2 my-3'>我的服务</text>
			<view class="flex p-2">
				<view class='p-1 text-center'>
					<image src="../../static/icon/icon_home_yhq.png" mode="widthFix" class='w-75'></image>
					<view class='m--2 font-small-gray'>购物红包</view>
				</view>
				<view class='p-1 text-center'>
					<image src="../../static/icon/icon_home_wdzj.png" mode="widthFix" class='w-75'></image>
					<view class='m--2 font-small-gray'>我的足迹</view>
				</view>
				<view class='p-1 text-center'>
					<image src="../../static/icon/icon_home_wdsc.png" mode="widthFix" class='w-75'></image>
					<view class='m--2 font-small-gray'>我的收藏</view>
				</view>
				<view class='p-1 text-center'>
					<image src="../../static/icon/icon_home_shdz.png" mode="widthFix" class='w-75'></image>
					<view class='m--2 font-small-gray'>收货地址</view>
				</view>
				<view class='p-1 text-center'>
					<image src="../../static/icon/icon_home_kfzx.png" mode="widthFix" class='w-75'></image>
					<view class='m--2 font-small-gray'>客服中心</view>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				userInfo:{
					
				}
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style>
	page{
		background: rgba(100,100,100,0.025);
	}
	page::before{
		content: '';
		display: block;
		width:100%;
		height:300rpx;
		border-radius:0 0 35% 4%;
		background: linear-gradient(to right, #d53369, #cbad6d);
		opacity: .7;
		position: absolute;
	}
	.icon{
		width:1.4rem;
		height:1.4rem;
	}
	.w-90{
		width:90%;
	}
	.userHeader{
		width:18%;
	}
	.font-small{
		font-size: 0.8rem;
	}
	.font-tiny{
		font-size: 0.75rem !important;
	}
	.flex{
		display: flex;
		justify-content: space-between;
	}
	.font-small-gray{
		font-size: 0.8rem;
		color:#aaa;
	}
	.clear::after{
		content:'';
		display: table;
		clear:both;
	}
	.m--1{
		margin-top: -0.7rem;
		font-size: 0.7rem;
	}
	.m--2{
		margin-top: -0.5rem;
		font-size: 0.7rem;
	}
	.border-light-radius{
		border-radius: 3%;
	}
	
	
</style>
