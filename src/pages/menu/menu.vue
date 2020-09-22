<template>
  <view class="content">
    <menuList></menuList>
    <tabBar></tabBar>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Goods from "../../interface/goods";
import { component } from "vue/types/umd";

export default Vue.extend({
  data() {
    return {
    }; 
  },
  onShow() {
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.content {
  background-color: #efefef;
}
</style>
