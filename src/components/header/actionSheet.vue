<template>
  <div class="page-actionsheet">
    <div class="page-actionsheet-wrapper">
      <div @click="active" id="menu" ref="animation"></div>
      <div class="pen" @click="create" id="pen" ref="pen"></div>

    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible2" cancel-text>aa</mt-actionsheet>
  </div>
</template>
<style>
.pen {
  position: fixed;
  top: 80%;
  right: 0;
  height: 80px;
  width: 80px;
  transform: rotate(30deg);
  z-index: 10000;
}
.wefun{
  height: 200px;
}
</style>

<script type="text/babel">
import lottie from "lottie-web";
import menu from "./menu1.json";
import pen from "./pen.json";

export default {
  data() {
    return {
      showMenu: false,
      sheetVisible: false,
      sheetVisible2: false,
      actions: [],
      actions2: []
    };
  },
  methods: {
    active(e) {
      console.log(12);
      e.stopPropagation();
      this.sheetVisible2 = !this.sheetVisible2;
      if (!this.showMenu) {
        this.showMenu = true;
        this.anim.playSegments([20, 80], true);
      } else {
        this.showMenu = false;
        this.anim.playSegments([80, 140], true);
      }
    },
    index() {
      this.unActive();
      this.$router.push({ path: "/" });
    },
    detail() {
      this.unActive();
      this.$router.push({ path: "detail" });
    },
    user() {
      this.unActive();
      this.$router.push({ path: "user" });
    },
    create(){
      this.pen.playSegments([0, 48], true);
      this.unActive();
      this.$router.push({ path: "create" });
    },
    unActive() {
      if (!this.showMenu) {
        return;
      } else {
        this.showMenu = false;
        this.anim.playSegments([80, 150], true);
      }
    }
  },

  mounted() {
    this.actions = [
      {
        name: "首页",
        method: this.index
      },



    ];
    let html = document.getElementsByTagName("html")[0];
    html.addEventListener("click", e => {
      this.unActive();
    });
    this.anim = lottie.loadAnimation({
      container: this.$refs.animation,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: menu
    });
    this.pen = lottie.loadAnimation({
      container: this.$refs.pen,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: pen
    });
  }
};
</script>
