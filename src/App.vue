<script lang="ts">
    import Vue from 'vue';
    
    export default Vue.extend({
        mpType: 'app',
        onLaunch() {
            Vue.prototype.$store.commit('getProduct');
        },
        onShow() {
            console.log('App Show')
        },
        onHide() {
            console.log('App Hide')
        }
    });
</script>

<style>

    uni-page{
        background-color: #efefef;
    }

    @font-face {
        font-family: youyuan;
        src: url('./static/font/font.ttf');
    }

    .content{
        font-family: youyuan;
    }
    
</style>
