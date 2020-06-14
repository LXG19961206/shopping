<script>
	export default {
		onLaunch: function() {
			try{
				console.log('App Launch')
				plus?plus.screen.lockOrientation('portrait-primary'):null
			}catch(err){
				
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style scoped lang="scss">
@font-face {
     font-family: youyuan;
     src: url('./static/font/font.ttf');
}



</style>
