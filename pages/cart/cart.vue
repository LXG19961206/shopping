<template>
	<view class="content" ref='content'>
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
				v-for="(item,i) of (productMsg.slice(95))"
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
		<messageList
			v-for="(item,i) of messageList"
			:key="i"
			:headerSrc = "item.src"
			:userName = "item.uname"
			:messageContent = "item.content"
			:messageCount = "item.count"
			:sendTime = "item.sendTime">
		</messageList>
		<!-- <productDetails
			:imgsGroup="productMsg[0].img"
			:imgsGroup2="productMsg[0].img2"
			:imgsGroup3="productMsg[0].img3"
			:price="productMsg[0].price"
			:price2="productMsg[0].price2"
			:pname="productMsg[0].pname">
		</productDetails> -->
    <button @click='showTip'>222</button>
		<loadMore
			:getMore="getMore"
			:canLoadMore="canGetMore">
		</loadMore>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canGetMore:true,
				getMore: ()=>{
					const that = this;
					uniCloud.callFunction({
						name:"operateData"
					}).then(res=>{
						if(that.productMsg.length>105){
							that.canGetMore = false
							return
						}
						that.productMsg.push(res.result.data[0]);
						console.log(that.productMsg);
					})
				},
				searchInputMsg: {
					border: "1px solid #ccc",
					width: "90",
					inputIcon: "../../static/icon/ic_appbar_search_black.png",
					type: "0",
					placeholder: "请输入您感兴趣的商品..."
				},
				title: "Hello",
				productMsg: [],
				messageList:[
					{
						src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592220737031&di=d4fa74add9ee43f0e8653b4526ead15a&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Fdoc%2Fpic%2Fitem%2F8b82b9014a90f60367734e773312b31bb051ed3b.jpg',
						uname:'淼 可 欢',
						content:'时间本是无数个彼此孤立、毫无关联的片段;因为回忆的存在,使过去、现在能够连接在一起',
						count:'20',
						sendTime:'2020-06-15'
					},
					{
						src:'http://img0.imgtn.bdimg.com/it/u=1803056350,344909414&fm=11&gp=0.jpg',
						uname:'降温丶',
						content:'沧海月明珠有泪,蓝田玉暖玉生烟.此情可待成追忆 ? 只是当时已惘然 .',
						count:'0',
						sendTime:'明天'
					}
				]
			}
		},
    mounted() {
      const that = this
      that.$toast.show({
        text:'提示内容',
        duration:2000,
        type:'warning'
      })
     this.$toast.confirm({
       text:"是否进行路由跳转?",
       success(){
         uni.reLaunch({
           url:"../index/index"
         })
       },
       cancel(){
         console.log('您取消了操作')
       }
     })
    },
		onShow(){
			uni.getSystemInfo({
			      success: function (res) {
			        console.log(res)
			      }
			    })
			this.$nextTick(function(){
				console.log(document.querySelector('body').clientHeight)
				console.log(window.getComputedStyle(document.querySelector('body')).height)
			})
			const that = this;
			uniCloud.callFunction({
				name:"operateData"
			}).then(res=>{
				that.productMsg = res.result.data;
				console.log(that.productMsg);
			})
		},
		methods: {
      showTip(){
        this.$toast.show({
          text:'提示内容',
          duration:2000,
          type:'warning'
        })
        
      },
			fun(){
				console.log(0)
			},
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
