<template>
	<view class = "lxg-ui-messageList">
		<image
			class = "lxg-ui-messageList-header"
			:src = "headerSrc">
		</image>
		<text class = "lxg-ui-messageList-uname"> {{ userName }} </text>
		<text class = "lxg-ui-messageList-content"> {{ messageContent }} </text>
		<text class = "lxg-ui-messageList-time">{{sendTime}}</text>
		<text
			v-if = "messageCount!='0'"
			class = "lxg-ui-messageList-msgCount"> {{ messageCount }} 
		</text>
	</view>
</template>

<script>
	export default {
		props:{
			headerSrc:{
				default: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1592209915&di=c20f25107372873bd0c42dc861e690c2&src=http://h.hiphotos.baidu.com/zhidao/wh=600,800/sign=1fe7c2f7bc315c6043c063e9bd81e72b/c8ea15ce36d3d539491961213a87e950352ab028.jpg',
				type: String
			},
			userName:{
				default: '追忆似水年华',
				type: String
			},
			messageContent: {
				default: '弃我去者,昨日之日不可留 乱我心者,今日之日多烦忧',
				type: String
			},
			messageCount: {
				default: '1',
				type:String 
			},
			sendTime: {
				default: '昨天',
				type:String
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../app.scss";
.lxg-ui-messageList {
	position: relative;
	height: 150rpx;
	border-bottom: 1rpx solid #eee;
	&-header {
		width:120rpx;
		height:120rpx;
		border-radius: 10rpx;
		position: absolute;
		left: 10rpx;
		top: 15rpx;
	}
	&-uname {
		position: absolute;
		left: 150rpx;
		top: 15rpx;
		font-size: 28rpx;
		color: #333;
	}
	&-content {
		position: absolute;
		left: 150rpx;
		top: 75rpx;
		@include lxg-mainFont;
		@include lxg-doubleLines;
		font-size: 18rpx;
		color: #aaa;
		width:400rpx;
	}
	&-time {
		position: absolute;
		right: 20rpx;
		top: 30rpx;
		font-size: 20rpx;
		color: #aaa;
	}
	&-msgCount {
		position: absolute;
		right: 20rpx;
		top: 80rpx;
		display: inline-block;
		width: 30rpx;	
		height: 30rpx;
		background-color: #C82333;
		border-radius: 50%;
		color: #fff;
		font-size: 16rpx;
		text-align: center;
		line-height: 30rpx;
		padding: 5rpx;
	}
}
</style>
