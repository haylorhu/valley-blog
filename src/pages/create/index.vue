<template>
  <div >

    <div class="cell">
      <mt-cell  class="info" title="内容简介"></mt-cell>
    <mt-field label="文章标题" placeholder="请输入文章标题,限30个字" v-model="title"></mt-field>
    </div>

    <div class="cell">
      <mt-cell class="info" title="内容简介"></mt-cell>
    <mt-field label="内容简介" placeholder="请输入内容简介,限30个字" v-model="description"></mt-field>
    </div>
    <div class="cell">
      <mt-field label="文章内容" placeholder="文章内容,限30个字" type="textarea" rows="4" v-model="content"></mt-field>
    </div>
    <mt-button @click="onCreate">创建</mt-button>


    <p></p>
  </div>
</template>
<script>
import { BlogModel } from "../../api/blog.js";
const blog = new BlogModel();
export default {
  data() {
    return {
      title:"",
      content:"",
      description:"",

    };
  },
  methods:{
    onCreate(){
      blog.createBlog({ title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
      .then(
        ()=>{;
        console.log("ok")
        },
        ()=>{;
        console.log("no")

        }
      )
    }
  }
};
</script>
<style  lang='less' scoped >

.info{
  margin-bottom: 2px;
}
.cell{
  margin: 15px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
</style>
