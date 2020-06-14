<template>
	<view class="content">
		<searchInput
		:border="searchInputMsg.border"
		:width="searchInputMsg.width"
		:inputIcon="searchInputMsg.inputIcon"
		:type="searchInputMsg.type"
		:placeholder="searchInputMsg.placeholder"
		api="http://www.baidu.com"
		>
		</searchInput>
		<productCard></productCard>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchInputMsg: {
					border: "1px solid #ccc",
					width: "90",
					inputIcon: "../../static/icon/ic_appbar_search_black.png",
					type: "0",
					placeholder: "请输入您感兴趣的商品..."
				},
				title: "Hello",
				productMsg: []
			}
		},
		methods:{
			 fromson(e){
				 alert(123)
				console.log(e)
			}
		},
		onShow(){
			const that = this;
			uniCloud.callFunction({
				name:"operateData"
			}).then(res=>{
				that.productMsg = res.result.data;
				console.log(that.productMsg);
			})
		},
		methods: {
			isLogin(){
				let _this=this
				localStorage&&localStorage.getItem("uid")?null:(()=>{
					uni.showToast({
					        title: "请您先完成登录...",
							icon:"none",
					        duration: 500,
							success(){
								setTimeout(()=>{
									uni.navigateTo({
										url:"../login/login"
									})
								},500)
							}
					    });
				})()
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
