<template>
	<view 
		class="lxg-ui-loadMore-container" 
		@touchstart="touchStart($event)">
		<text 
			class="lxg-ui-loadMore-text" 
			v-show="isLoading == false" 
			v-text="tipsText">
		</text>
		<image 
			class="lxg-ui-loadMore-icon" 
			v-show="isLoading"  
			src="../../static/loading.gif" 
			mode=""> 
		</image>
	</view>
</template>
<script>
	export default {
		props: {
			currentPage: {
				default: 1,
				type: Number
			},
			pageSize: {
				default: 5,
				type: Number
			},
			getMore: {
				type: Function
			},
			canLoadMore: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				tipsText: '上拉加载更多...',
				pageHeight: '',
				pageY: '',
				isLoading: false,
				timer: true
			}
		},
		computed: {
			pageTemp() {
				return this.pageHeight - this.pageY
			}
		},
		methods: {
			touchStart(e) {
				console.log(e)
			}
		},
		mounted() {
			const that = this
			this.$nextTick(() => {
				const content = document.querySelector('.content')
				content.addEventListener('touchstart', (e) => {
					this.isLoading = false
					// 获取我们点击屏幕的点
					this.pageY = e.targetTouches[0].pageY
					// 获取当前一屏幕的高度
					// 最终的结果还要减去50是因为tabBar的高度不应该计算在内
					this.pageHeight = document.querySelector('html').scrollHeight - 50
					if (this.pageTemp < 50) {
						// 如果我们点击的位置是屏幕的下边沿50px之内的话
						console.log('距离页面的底部有' + (this.pageTemp) + 'px')
					}
				})
				// 根据touchmove事件,配合刚才的touchstart事件,我们可以判断屏幕是否是被上拉或是下拉
				content.addEventListener('touchmove', (e) => {
					// 当父组件通知我们已经不能进行下拉加载时,阻止方法执行,并且修改提示文字
					if (this.canLoadMore == false) {
						this.tipsText = '已经到最底啦...'
						return
					}
					if (this.pageTemp > 50) return // 如果距离大于50,那就不触发上拉加载功能
					const { pageY } = e.targetTouches[0]
					console.log(pageY, this.pageY)
					// 如果判断是下拉,直接 return ,不执行方法
					if (pageY > this.pageY) return
					this.isLoading = true
					// 需要加入节流功能,不然touchmove事件会一直触发
					if (this.timer == false) return
					this.timer = false
					setTimeout(() => {
						return new Promise((resolve, reject) => {
							try {
								this.getMore()
								resolve()
							} catch (err) {
								console.log(new Error(err))
								reject()
							}
						}).then(res => {
							setTimeout(() => {
								this.isLoading = false
								this.timer = true
							}, 1000)
						}).catch(err => {
							console.log(new Error(err))
						})
					}, 2000)
				})
			})
		}
	}
</script>

<style lang="scss">
	@import "../../app.scss";

	.lxg-ui-loadMore-container {
		text-align: center;

		.lxg-ui-loadMore-text {
			color: #aaa;
			font-size: 21rpx;
		}

		.lxg-ui-loadMore-icon {
			height: 60rpx;
			width: 80rpx;
			margin-top: 10rpx;
		}
	}
</style>
