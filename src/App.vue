<script lang="ts">
    import Vue from 'vue';
    
    export default Vue.extend({
        mpType: 'app',
        onLaunch() {
            console.log('App Launch')
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
</style>
