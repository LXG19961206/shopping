<template>
  <view class="content" ref="content">
    <chatMsg
      @addMsg="addMsg"
      v-for="(item, i) in chatList"
      :key="i"
      :avatar="item.avatar"
      :uname="item.uname"
      :text="item.text"
      :type="item.type">
    </chatMsg>

    <emojis></emojis>
    <view
      style="
        opacity: 0;
        margin-bottom: 120rpx;
        background: #efefef;
        height: 160rpx;
      "
    >
    </view>
    <chatArea ref='chatArea'></chatArea>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Goods from "../../interface/goods";
import { component } from "vue/types/umd";
const $ = (Object as any)["$"];
export default Vue.extend({
  data() {
    return {
      emojis:[''],
      swiperImgList: [
        "../../static/swiper/0 (1).jpg",
        "../../static/swiper/0 (2).jpg",
        "../../static/swiper/0 (3).jpg",
        "../../static/swiper/0 (4).jpg",
      ],
      chatList: [
        {
          text: "&#129300;&#129301;&#129348;",
          type: 0,
          uname: "世界的内容",
          avatar: "../../static/aboutme.png",
        },
        {
          text: "&#129294;",
          type: 1,
          uname: "世界的内容",
          avatar: "../../static/aboutme.png",
        },
        {
          text: "测试内容/::D",
          type: 0,
          uname: "世界的内容",
        },
        {
          text: "测试4",
          type: 0,
          uname: "世界的内容",
        },
      ],
    };
  },
  watch: {
    chatList(res: Array<object>) {
      console.log("123");
      // const height:number = this.$refs.content.$el.clientHeight
      // const sons:Array <HTMLElement> = this.$refs.content.$el.childNodes
      // const currentSonHeight:number|string = sons[sons.length - 3].style.height
      $.goBottom();
    },
  },
  created() {
    uni.setNavigationBarTitle({
      title: `与${this.chatList[2].uname}聊天中...`,
    });
  },
  onLoad() {
    uni.$on("addMsg", (res: object) => {
      (this.chatList as Array<object>).push(res);
    });
    uni.$on('getEmoji',(res:string)=>{
      console.log(res)
      this.$refs.chatArea.content += res
    })
  },
  methods: {
    addMsg(res: number | string) {
      (this.chatList as Array<object>).push({
        type: 1,
        text: "测试",
      });
      console.log(this.chatList);
    },
    handleSearch() {
      const el: object = this.$refs.searchInput;
      return new Promise((resolve, reject) => {
        const el: any = this.$refs.searchInput;
        el.type = 2;
        resolve(el);
      }).then((res) => {
        setTimeout(() => {
          const el: any = res;
          el.type = 0;
        }, 30000);
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  background-color: #efefef;
}
</style>
