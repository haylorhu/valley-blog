<template>
  <div class="regesit">
    <mt-field class="regesitInput" label="账号" placeholder="请输入账户" type="email" v-model="username"></mt-field>
    <mt-field
      class="regesitInput"
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="password"
    ></mt-field>
    <div></div>
    <mt-button @click="clickLogin" class="logButton" type="primary">登录</mt-button>
  </div>
</template>
<script>
import Vue from "vue";
import { mapActions } from "vuex";

import { Toast } from "mint-ui";

export default {
  data() {
    return {
      username: "",
      password: "",
      value: ""
    };
  },
  methods: {
    ...mapActions(['login']),
    clickLogin() {
      console.log(this.login)
      this.login({ username: this.username, password: this.password }).then(
        () => {
          this.$router.push({path: this.$route.query.redirect || '/'})
        }
      );
    }
  }
};
</script>
<style  lang='less' scoped>
.regesit {
  .logButton {
    margin-top: 40px;
  }
  .regesitInput {
    // border-bottom: 1px solid rgb(100, 100, 100);
    margin-bottom: 5px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  .regesitInput {
    .mint-cell-wrapper {
      border: 1px solid #000;
    }
  }

  margin-top: 50px;
}
</style>
