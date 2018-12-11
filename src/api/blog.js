import HTTP from '../util/request'

const URL = {
  GET_LIST: '/blog',
  GET_DETAIL: '/blog/:blogId',
  CREATE: '/blog',
  UPDATE: '/blog/:blogId',
  DELETE: '/blog/:blogId'
}

class BlogModel extends HTTP{
  constructor(){
    super()

  }

  GetBlogs({page=1,userId,atIndex} = {page:1}){
    let options = {
      url:URL.GET_LIST,
      type:"GET",
      data:{page,userId,atIndex},
    }
    return this.request(options)
  }
  GetIndexBlogs({page = 1}={page:1}){
    return this.GetBlogs({page,atIndex:true})
  }
  GetBlogsByUserId(userId,{page=1,atIndex}={page:1}){
    let options = {
      url:URL.GET_LIST,
      type:"GET",
      data:{userId,page,atIndex},
    }
    return this.request(options)
  }
  getDetail({blogId}){
    let options = {
      url:URL.GET_DETAIL.replace(':blogId',blogId),
    }
    return this.request(options)
  }
  createBlog({title="",content="",description="",atIndex = false}) {
    let options ={
      url:URL.CREATE,
      type:'POST',
      data:{
        title,
        content,
        description,
        atIndex : false
      }
    }
    return this.request(options)
  }
  updateBlog({ title = '', content = '', description = '', atIndex = false ,blogId} = { title: '', content: '', description: '', atIndex: false,blogId:""}) {
    let options ={
      url:URL.UPDATE.replace(":blogId",blogId),
      type:'PATCH',
      data:{
        title,
        content,
        description,
        atIndex
      }
    }
    return this.request(options)
  }
  deleteBlog({blogId}){
    let options ={
      url:URL.DELETE.replace(":blogId",blogId),
      type:'DELETE',
    }
    return this.request(options)
  }
}
export  {BlogModel}
