<template>
  <div class="regesit">
    <mt-field label="用户名" class="resInput" placeholder="请输入用户名" v-model="username"></mt-field>
    <div class="tip"> 长度1到15个字符，只能是字母数字下划线中文</div>
    <mt-field label="密码" class="resInput" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="tip">长度6到16个任意字符</div>
    <div>

    </div>
    <mt-button class="logButton" @click="regesit" type="primary">注册</mt-button>
  </div>
</template>
<script>
import Vue from "vue";
import Check from "./checklist";
import { mapActions } from 'vuex'


export default {
  components: {
    "h-check": Check
  },
  data() {
    return {
      username: "",
      password: "",
      value: "",
      account: ""
    };
  },
  methods: {
...mapActions(['register']),

    regesit(){

      this.register({username: this.username, password: this.password})
        .then(()=>{
          this.$router.push({path: '/'})
        })
    }
  }
};
</script>
<style  lang='less'>
.regesit {
  .tip{
    margin: 5px 0;

  }
  .logButton {
    margin-top: 40px;
  }
  .resInput {
    // border-bottom: 1px solid rgb(99, 99, 99);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  margin-top: 50px;
}
</style>
