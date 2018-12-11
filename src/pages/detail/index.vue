<template>
  <div class="indexWarper">
    <div>
      <div class="userInfo">
      <img class="avatar" :src="user.avatar" alt>
      <h1 class="user">{{user.username}}</h1>
      </div>
      <div class="indexBlog"> <h1 class="user">{{title}}</h1>
        <h2 class="blogInfo">{{createdAt}}</h2>
        <p class="content">{{description}}</p>
        <p class="content">{{content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { BlogModel } from "../../api/blog.js";
const blog = new BlogModel();

export default {
  data() {
    return {
      title: "",
      description: "",
      user: {},
      createdAt: "",
      content:"",
    };
  },
  created() {
    this.blogId = this.$route.params.blogId;
    blog.getDetail({ blogId: this.blogId }).then(res => {
      console.log(res);
      this.title = res.data.title;
      this.description = res.data.description;
      this.createdAt = res.data.createdAt;
      this.user = res.data.user;
      this.content = res.data.content
    });
  }
};
</script>
<style  lang='less' scoped >
@import url("./index.less");

.indexWarper {
  display: flex;
  flex-direction: row;
  margin: 5px 20px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  background-color: rgb(240, 240, 240);
  justify-content: center;
  align-items: center;
  .avatar {
    margin: 10px 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
      .user {
      font-weight: 700;
      margin-bottom: 5px;
    }
    .userInfo{
      display: flex;
      align-items: center;
    }
  .indexBlog {
    max-width: 450px;
    display: flex;
    margin: 10px 10px;
    flex-direction: column;
    justify-content: flex-start;


    .blogInfo {
      font-weight: 300;
      font-size: 0.5em;
      margin-bottom: 5px;
    }
    .content {
      margin-bottom: 5px;
      display: inline;
    }
  }
}
</style>
