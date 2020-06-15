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
		<view class="productBox">
			<view class="productItemBox"
				v-for="(item,i) of productMsg"
				:key="i">
				<productCard
					class="lxg-ui-productCard"
					:productImg = "item.img"
					:productPricePast = "item.price2"
					:productPriceNow = "item.price"
					:productText = "item.pname"
					:isOfferSend = "true"
					:isHot = "false"
				></productCard>
			</view>
		</view>
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
.content {
	width: 100%;
	.productBox{
		display: flex;
		flex-flow: wrap;
		width: 100%;
		.productItemBox {
			width: 50%;
			box-sizing: border-box;
			padding: 10rpx;
		}
	}
}
</style>
