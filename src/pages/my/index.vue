<template>
  <div class="indexOuter">
    <div class="myInfo">
      <img class="avatar" :src="user.avatar">
      <p>{{user.username}}</p>
    </div>
    <hr class="hr">
    <div>
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
        <div class="edit">
          <div class="middle">
          <router-link class="editButton" :to="`/edit/${blog.id}`">
            修改
          </router-link>
          <a class="editButton" @click.stop.prevent="deleteBlog(blog.id)">删除</a>
          </div>

        </div>
      </router-link>
    </div>
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="onPageChange"
    ></el-pagination>
  </div>
</template>
<script>
import { BlogModel } from "../../api/blog.js";
const blog = new BlogModel();
import { Toast } from "mint-ui";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    blog.GetBlogsByUserId(this.user.id, { page: this.page }).then(res => {
      this.page = res.page;
      this.total = res.total;
      this.blogs = res.data;
    });
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
    },
    async deleteBlog(id) {

      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      await   blog.deleteBlog({blogId:id})
      this.$message.success('删除成功')
      this.blogs = this.blogs.filter(blog => blog.id != id)
    }
  }
};
</script>
<style lang="less" scoped >
.edit{
  flex-grow: 1;
  display: flex;
  // flex-direction: column;
  justify-content: flex-end;
  .middle{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .editButton{
display: flex;
flex-direction: column;
height: 40%;
padding: 10px 20px;
text-align: center;
align-content: center;
letter-spacing:0.2em;
font-size: 15px;
color: rgb(255, 99, 51);
&:first-child{
  padding-bottom: 0;
  color: rgb(64,156, 255)
}
  }
}
.indexOuter {
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  .hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  .myInfo {
    display: flex;
    margin: 5px 10px;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    .avatar {
      margin: 10px 10px;
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
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
        -webkit-box-orient: vertic;
      }
    }
  }
}
</style>
