<script lang="ts">
    import Vue from 'vue';
    // import lxgDOM from './pugins/$lxg.js'

    
    export default Vue.extend({
        mpType: 'app',
        onLaunch() {

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

    uni-page-head[uni-page-head-type=default]~uni-page-wrapper{
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
