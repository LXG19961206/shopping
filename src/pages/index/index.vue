<template>
	<div class="content"></div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Goods from '../../func/func'
	
	
	export default Vue.extend({
		data() {
			return {
				title: 'Hello',
				name: String 
			}
		},
		onLoad() {
			this.$nextTick(()=>{
				const that = this
				this.$confirm({
					text: '提示相关的内容',
					success(){
						console.log(that.title)
					}
				})
			})
			const good : Goods [] = [
				{
					pname: "三星手机",
				    price: '',
				    number: 12,
				    productDate: "2020-07-30",
					msg: {
						other: null
					}
				}
			]
			const fn : (ag1:number,ag2:string)=>string = (age:number,name:string)=>"1"
			console.log(fn(2,"2"))

			const obj : {
				name: string,
				age: number,
				msg: object
			} = {
				name: "tom",
				age: 12,
				msg: {

				}
			}

			const arr : Array<string|object|number> = [1,2,3]
		},
		methods: {

		}
	});
</script>

<style lang="scss" scoped>
</style>
