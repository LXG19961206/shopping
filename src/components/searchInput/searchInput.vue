<template>
  <div class="form-container">
    <view class="content">
      <input
        type="text"
        value=""
        class="lxg-ui-searchInput"
        :placeholder="type == 2 ? waiting : placeholder"
        :disabled="type == 2"
      />
      <image
        :class="type == 2 ? 'animation' : ''"
        @click="goSearch"
        :src="src"
        mode="widthFix" 
      />
    </view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: "请输入您要搜索的内容...",
    },
    goSearch: {   
      type: Function,
      default: function () {},
    },
  },
  data() {
    return {
      src: "../../static/search.png",
      type: 0,
      animation: "",
      waiting: "正在处理中,请稍作等待",
    };
  },
  created() {},
  methods: {},
  watch: {
    type(res) {
      switch (res) {
        case 0:
          this.src = "../../static/search.png";
          break;
        case 1:
          this.src = "../../static/find.png";
          break;
        case 2:
          this.src = "../../static/loading.png";
          setInterval(() => {
            this.waiting == "正在处理中,请稍作等待"
              ? (this.waiting = "正在处理中,请稍作等待.")
              : this.waiting == "正在处理中,请稍作等待."
              ? (this.waiting = "正在处理中,请稍作等待..")
              : this.waiting == "正在处理中,请稍作等待.."
              ? (this.waiting = "正在处理中,请稍作等待...")
              : this.waiting == "正在处理中,请稍作等待..."
              ? (this.waiting = "正在处理中,请稍作等待")
              : null;
          }, 500);
          break;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss";

.form-container {
  height: 100rpx;
  .content {
    margin-top: 10rpx;
    position: relative;
    .lxg-ui-searchInput {
      background: #fff;
      box-sizing: border-box;
      width: 90%;
      height: 80rpx;
      margin: auto;
      border: 1px solid #aaa;
      padding-right: 20%;
      border-radius: 25rpx;
      text-indent: 30rpx;
      letter-spacing: 1px;
      color: #333;
    }

    @keyframes rotate {
      from {
        width: 60rpx;
        height: 60rpx;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) rotate(0deg);
      }
      to {
        width: 55rpx;
        height: 55rpx;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) rotate(360deg);
      }
    }
    
    image {
      width: 55rpx;
      right: 10%;
      @include positionCenterY;
    }

    .animation {
      animation: rotate 1.5s linear 0s infinite;
    }
  }
}
</style>
