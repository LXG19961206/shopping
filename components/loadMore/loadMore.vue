<template>
	<view 
		class="lxg-ui-loadMore-container"
		@touchstart="touchStart($event)">
		<text 
			class="lxg-ui-loadMore-text"
			v-text="tipsText"
			>
		</text>
	</view>
</template>

<script>
	export default {
		props:{
			tipsText:{
				default: '上拉加载更多...',
				type: String
			},
			currentPage:{
				default: 1,
				type:Number
			},
			pageSize:{
				default: 5,
				type:Number
			}
		},
		methods:{
			touchStart(e){
				console.log(e)
			}
		},
		mounted() {
			const that = this 
			this.$nextTick(()=>{
				let content = document.querySelector('.content')
				// get the height of '.content' 
				let height = content.getComputedStyle
				console.log(this.$parent.getComputedStyle)
				content.addEventListener('touchstart',e=>{
					console.log(e)
				})
			})
		}
	}
</script>

<style lang="scss">
@import "../../app.scss";
.lxg-ui-loadMore-container{
	text-align: center;
	.lxg-ui-loadMore-text {
		color: #aaa;
		font-size: 21rpx;
	}
}
</style>
