<template>
	<view class="content">
		<view id="searchBox" class='position-relative w-100 mt-1 p-1'>
			<input type="text" value="" id='searchInput' placeholder="请输入您要搜索的内容..."
			class='bg-light'/>
			<image :src="searchImgSrc[0]" mode="" id='searchImg'
			class='myCenter' @tap="search"></image>
		</view>
		<view id='menuAndContent' class='mt-1'>
			<view id="leftMenu" class='w-25 bg-light' @tap="switchClass($event)">
				<view class='menu-item' data-target='0' :class='{"selected":toggleArr[0]}'>全部</view>
				<view class='menu-item' data-target='1' :class='{"selected":toggleArr[1]}'>彩妆护肤</view>
				<view class='menu-item' data-target='2' :class='{"selected":toggleArr[2]}'>食品生鲜</view>
				<view class='menu-item' data-target='3' :class='{"selected":toggleArr[3]}'>鞋靴服饰</view>
				<view class='menu-item' data-target='4' :class='{"selected":toggleArr[4]}'>个人护理</view>
				<view class='menu-item' data-target='5' :class='{"selected":toggleArr[5]}'>母婴玩具</view>
				<view class='menu-item' data-target='6' :class='{"selected":toggleArr[6]}'>家具家纺</view>
				<view class='menu-item' data-target='7' :class='{"selected":toggleArr[7]}'>箱包配饰</view>
				<view class='menu-item' data-target='8' :class='{"selected":toggleArr[8]}'>数码家电</view>
			</view>
			<view id="rightMenu" class='row'>
				
					<view class="text-center col-4 w-33" v-for='(item,i) in goodMsg[0].icon' :key='i'
					v-if='toggleArr[0]||toggleArr[1]'>
						<image  :src="item" mode="widthFix" class='w-100 mb--1' ></image>
						<text class='font-verySmall text-dark'>{{goodMsg[0].details[i]}}</text>
					</view>
				
				
					<view class="text-center col-4 w-33 " v-for='(item,i) in goodMsg[1].icon' :key='i+"a"'
					v-if='toggleArr[0]||toggleArr[2]'>
						<image  :src="item" mode="widthFix" class='w-100 mb--1'></image>
						<text class='font-verySmall text-dark'>{{goodMsg[1].details[i]}}</text>
					</view>
					
					
					<view class="text-center col-4 w-33" v-for='(item,i) in goodMsg[2].icon' :key='i+"b"'
					v-if='toggleArr[0]||toggleArr[3]'>
						<image  :src="item" mode="widthFix" class='w-100 mb--1'></image>
						<text class='font-verySmall text-dark'>{{goodMsg[2].details[i]}}</text>
					</view>
					
					
					<view class="text-center col-4 w-33" v-for='(item,i) in goodMsg[3].icon' :key='i+"c"'
					v-if='toggleArr[0]||toggleArr[4]'>
						<image  :src="item" mode="widthFix" class='w-100 mb--1'></image>
						<text class='font-verySmall text-dark'>{{goodMsg[3].details[i]}}</text>
					</view>
					
					<view class="text-center col-4 w-33" v-for='(item,i) in goodMsg[4].icon' :key='i+"d"'
					v-if='toggleArr[0]||toggleArr[5]'>
						<image  :src="item" mode="widthFix" class='w-100 mb--1'></image>
						<text class='font-verySmall text-dark'>{{goodMsg[4].details[i]}}</text>
					</view>
					
					<view class="text-center col-4 w-33" v-for='(item,i) in goodMsg[5].icon' :key='i+"e"'
					v-if='toggleArr[0]||toggleArr[6]'>
						<image  :src="item" mode="widthFix" class='w-100 mb--1'></image>
						<text class='font-verySmall text-dark'>{{goodMsg[5].details[i]}}</text>
					</view>
					
					<view class="text-center col-4 w-33" v-for='(item,i) in goodMsg[6].icon' :key='i+"f"'
					v-if='toggleArr[0]||toggleArr[7]'>
						<image  :src="item" mode="widthFix" class='w-100 mb--1'></image>
						<text class='font-verySmall text-dark'>{{goodMsg[6].details[i]}}</text>
					</view>
					
					<view class="" style='height:100rpx;'></view>
					<com name='comItem'></com>
			</view>
		</view>
		
	</view>
</template>

<script>
	import com from '../../compoents/com.vue'
	console.log(com)
	export default {
		templates:{
			com
		},
		data() {
			return {
				msg:'hahah',
				title: 'Hello',
				searchImgSrc:[
					`../../static/find (1).png`,`../../static/find.png`
				],
				msg:'',
				toggleArr:[
					true,false,false,false,false,false,false,false,false
				],
				goodMsg:[
					{
						className:'makeup',
						icon:[
							`../../static/product/makeup1.png`,
							`../../static/product/makeup2.png`,
							`../../static/product/makeup3.jpg`,
							`../../static/product/makeup4.jpg`
						],
						details:[
							"口红类","面膜类","乳液","精华液"
						],
					},
					
					{
						className:'food',
						icon:[
							`../../static/product/food1.png`,
							`../../static/product/food2.png`,
							`../../static/product/food3.png`,
							`../../static/product/food4.png`
						],
						details:[ 
							"零食类","饮品类","粮油类","酒类"
						],
					},
					
					
					{
						className:'cloth',
						icon:[
							`../../static/product/cloth1.png`,
							`../../static/product/cloth2.png`,
							`../../static/product/cloth3.png`,
							`../../static/product/cloth4.png`
						],
						details:[
							"外套类","上衣类","鞋类","裤类" 
						],
					},
					
					
					{
						className:'clean',
						icon:[
							`../../static/product/child1.png`,
							`../../static/product/child2.png`,
							`../../static/product/child3.png`
						],
						details:[
							"儿童品","母婴品","儿童用品"
						],
					},
					
					{
						className:'furniture',
						icon:[
							`../../static/product/furn1.png`,
							`../../static/product/furn2.png`,
							`../../static/product/furn3.png`
						],
						details:[
							"桌布床布","沙发用品","家具"
						],
					},
					
					
					{
						className:'boxAndBag',
						icon:[
							`../../static/product/box1.png`,
							`../../static/product/box2.png`,
							`../../static/product/box3.png`
						],
						details:[
							"箱","包类","挂饰"
						],
					},
					
					
					{
						className:'digit',
						icon:[
							`../../static/product/digit1.png`,
							`../../static/product/digit2.png`,
							`../../static/product/digit3.png`,
							`../../static/product/digit4.png`
						],
						details:[
							"数码1","数码2","配件" 
						],
					}, 
					
				]
			}
		},
		onLoad() {
			
	
		},
		methods: {
			switchClass(evt){
				if(evt.target.dataset[`target`]||evt.target.dataset[`target`]==0){
					this.toggleArr.forEach((item,i)=>{
						this.toggleArr[i]=evt.target.dataset[`target`]==i?true:false
						this.toggleArr=[].concat(...this.toggleArr)
					})
				}
			},
			search(evt){
				this.searchImgSrc=this.searchImgSrc.slice(1).concat(this.searchImgSrc[0])
				setTimeout(()=>{
					this.searchImgSrc=[`../../static/find (1).png`,`../../static/find.png`]
				},1500)
				uni.showToast({
					title:'正在搜索...',
					icon:'loading',
					
				})
				
			}
		}
	}
</script>

<style>
	page,.content,body,#menuAndContent{
		height: 115%;
	}
	page{
		background: #fff;
	}
	#searchInput{
		margin-top: 0rem;
		border: 1px solid #bbb;
		border-radius:1rem;
		color:#aaa;
		font-size: 0.75rem;
		font-weight: 400;
		height: 2rem;
		text-indent: 1rem;
		background: #fff;
		
	}
	#searchImg{
		left: 90% !important;
		width:1.5rem;
		height:1.5rem;
	}
	.myCenter{
		position: absolute;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.w-33{
		width:33.3%;
	}
	#menuAndContent{
		position: relative;
	}
	#leftMenu{
		position: absolute;
		left: 0;
		height: 100%;
	}
	#rightMenu{
		position: absolute;
		left: 30%;
		
	}
	
	.flex{
		display: flex;
	}
	
	#leftMenu>view{
		text-align: center;
		color:#999;
		padding: 0.7rem;
		font-size: 0.8rem;
		font-weight: 600;
	}
	.selected{
		background: #fff;
		color:#666;
		border-left:5rpx solid #fc592d ;	
	}
	.font-verySmall{
		font-size: 0.6rem;
	}
	.mb--1{
		margin-bottom: -0.7rem;
	}
</style>
