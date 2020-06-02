<template name='comItem'>
	<view class=""  @tap='tofather'>
		{{msg}}是我的信息
	</view>
</template>

<script>
	export default{
		name:'comItem',
		props:{
			msg:String
		},
		methods:{
			tofather(){
				alert(1)
				this.$emit('fromson',3333)
			}
		}
	}
</script>

<style>
</style>
