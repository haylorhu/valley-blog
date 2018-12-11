<template>
  <div class="header">
    <div class="menu">
      <h-action>123</h-action>
    </div>
    <h1 class="headerTitle">多人博客</h1>
    <Actio></Actio>
    <template v-if="!isLogin">
          <div  class="sigin">
      <router-link to="/login" >
        <div class="topNav" >登录</div>
      </router-link>
      <router-link to="/regesit">
        <div class="topNav" >注册</div>
      </router-link>
    </div>
    </template>
    <template v-if="isLogin">
            <router-link to="/my" >
        <div  class="topNav"  >我的</div>
             </router-link  >

       <div class="topNav"   @click="onLogout">退出</div>

    </template>
  </div>
</template>

<script>
import Vue from "vue";
import actionSheet from "./actionSheet";
import actor from "../../../node_modules/mint-ui/packages/actionsheet/src/actionsheet.vue";
import {AuthModel} from "@/api/auth.js"
const auth = new AuthModel()
window.auth = auth


import { mapActions ,mapGetters } from "vuex";
export default {
  components: {
    "h-action": actionSheet,
    Actio: actor
  },
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  mounted(){

  },
  computed: {
      ...mapGetters([
        'isLogin',
        'user'
        ])
    },
    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
        ]),

      onLogout() {
        this.logout()
      }
    }
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  align-items: center;
  .topNav{
    // background-color: rgba(248, 248, 248, 0.562);
    font-size: 20px;
    padding-right: 10px;
    color:rgb(66,66, 66);
    cursor: pointer;
  }
  .headerTitle {
    flex-grow: 1;
    font-size: 20px;
    font-weight: 900;
    color:rgb(66,66, 66);
  }
  .menu {
    height: 30px;
    width: 30px;

  }
  .sigin {
    display: inline-flex;
  }
}
</style>
