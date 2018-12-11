<template>
  <div class="indexOuter">
    <router-link
      class="indexWarper"
      v-for="(blog, key,index) in blogs"
      :to="`/detail/${blog.id}`"
      :key="index"
    >
    <div class="userInfo">
      <img class="avatar" :src="blog.user.avatar" alt>
      <p>{{blog.user.username}}</p>
    </div>
      <div class="indexBlog">
        <h1 class="user">{{blog.title}}</h1>
        <h2 class="blogInfo">{{friendlyDate(blog.updatedAt)}}</h2>
        <p class="content">{{blog.description}}</p>
      </div>
    </router-link>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="onPageChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { BlogModel } from "../../api/blog.js";
const blog = new BlogModel();
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1,
      user:[]
    };
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1;
    blog.GetIndexBlogs({ page: this.page }).then(
      res => {

        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;


        console.log('====================================');
      },
      res => {
        console.log(res);
      }
    );
  },
  methods: {
    onPageChange(newPage) {
      console.log(newPage);
      blog.GetIndexBlogs({ page: newPage }).then(res => {
        console.log(res);
        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;
        this.$router.push({ path: "/", query: { page: newPage } });
      });
    }
  }
};
</script>
<style lang="less" scoped >
.userInfo{
  color: rgb(63, 177, 162);
  min-width:120px ;
}
.indexOuter {
  z-index: -2;
  .indexWarper {
    display: flex;
    flex-direction: row;
    margin: 5px 20px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    background-color: rgb(240, 240, 240);
    .avatar {
      margin: 10px 10px;
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
    .indexBlog {
      max-width: 450px;
      display: flex;
      margin: 10px 10px;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
      .user {
        font-weight: 700;
        margin-bottom: 5px;
      }
      .blogInfo {
        font-weight: 300;
        font-size: 0.5em;
        margin-bottom: 5px;
      }
      .content {
        margin-bottom: 5px;
        display: inline;
         text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertic
      }
    }
  }
}
</style>
