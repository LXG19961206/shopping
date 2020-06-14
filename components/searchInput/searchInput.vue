<template>
	<view class="lxg-ui-container">
		<!-- for to do something to control our placeholder , we use 'placeholder-class' -->
		<!-- Color and width are also configable in lxg-ui-searchInput -->
		<!-- Type is a Number , when we fill it with '0',our placeholder will became '请输入您想要的商品...',and 
		when it filled with '1' , placeholder will became '请输入您要@的人...' and so on , other feathers is to 
		do-->
		<input 
		    placeholder-class = "lxg-ui-searchInput-placeholder"
			class = "lxg-ui-searchInput" 
			:type = "type" 
			:placeholder = "placeholder"
			:style = "{width:width+'%',border:border}"
			:api = "api"
			>
			<image 
				@click="executeFeatures"
				:src="inputIcon" 
				mode="widthFix"
				class="lxg-ui-searchInput-icon"
				:style="{right:(95-width)+'%'}">
			</image>
		</input>
	</view>
</template>

<script>
	export default {
		props:{
			inputIcon:{
				default:"../../static/icon/ic_appbar_search_black.png",
				type:String
			},
			width:{
				default:90
			},
			border:{
				default:'#ccc solid 1px',
				type:String
			},
			type:{
				default:'0',
				type:String
			},
			placeholder:{
				default: '',
				type:String 
			},
			api:{
				default: '',
				type:String
			}
		},
		data(){
			return {
				timer: null
			}
		},
		methods:{
			executeFeatures(){
				const Type = this.type;
				const that = this;
				if(that.timer !== null) clearTimeout(that.timer);
				that.timer=setTimeout(()=>{
					switch(Type){
						case '0' : console.log(`executing searching , please wait`);break;}
				},600)}
		},
		onLoad(){
			const Type = this.type;
		}
	}
</script>

<style lang="scss" scoped>
	//shortly , app.scss is global style;
	@import '../../app.scss';
	
	.lxg-ui-container {
		position: relative;
		.lxg-ui-searchInput {
			@include lxg-mainFont;
			border: 2rpx solid #ccc;
			border-radius: 30px;
			padding:10rpx 35rpx;
			height: 20rpx;
			&-icon {
				@include  lxg-center-y;
				width:35rpx;
			}
		}
	}
</style>
