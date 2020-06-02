<template>
	<view class="content">
		<Com :msg='msg'></Com>
	</view>
</template>

<script>
	import Com from '../../compoents/com.vue'
	export default {
		components:{
			Com
		},
		data() {
			return {
				title: 'Hello',
				msg:123
			}
		},
		methods:{
			 fromson(e){
				 alert(123)
				console.log(e)
			}
		},
		onShow(){
			
			uniCloud.callFunction({
				name:'operateData'
			})
		},
		methods: {
			isLogin(){
				let _this=this
				localStorage&&localStorage.getItem('uid')?null:(()=>{
					uni.showToast({
					        title: '请您先完成登录...',
							icon:'none',
					        duration: 500,
							success(){
								setTimeout(()=>{
									uni.navigateTo({
										url:'../login/login'
									})
								},500)
							}
					    });
				})()
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
