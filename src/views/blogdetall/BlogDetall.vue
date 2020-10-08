<template>
  <div>
    <headers></headers>
    <el-button @click="deleteBlog()">
      <span class="deleteBlog" v-if="isNoShow">
      {{deleteBlogById}}
    </span>
    </el-button>

    <div class="myblog">
      <!--标题-->
      <h2>{{blog.title}}
      </h2>
      <!--分割线-->
      <el-divider></el-divider>
      <!--      内容-->
      <!--      markdown-body,引入样式-->
      <div class="markdown-body" v-html="blog.content">

      </div>

    </div>
    <div class="edit">
      <!--      编辑按钮-->
      <el-button type="primary" icon="el-icon-edit" v-if="isNoShow">
        <router-link :to="{path:'/blog/'+blog.id+'/edit'}">
          {{blogText}}
        </router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
  import Headers from "../../components/headers/Headers";
  import {blogdetall} from "../../network/blogdetall/blogdetall";
  // 刪除網絡
  import {deleteBlogs} from "../../network/blogedit/deleteblog";


  //引入之前加载的GitHubMarkdownCSS
  import 'github-markdown-css/github-markdown.css'

  export default {
    name: "BlogDetall",
    components: {
      Headers
    },
    data() {
      return {
        blog: {
          id: '',
          title: '',
          content: ''
        },
        isNoShow: false,
        blogText: '编辑博客',
        deleteBlogById: "删除博客"

      }
    },
    created() {
      // 初始化
      const blogId = this.$route.params.blogId
      console.log(blogId)
      this.blogdetalls(blogId)
    },
    methods: {
      //刪除
      deleteBlog() {
        const _this = this
        console.log('进入删除判断')
        _this.$message({type: 'success', message: '进入删除方法!'});
        _this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('进入删除方法')
          const blogId=_this.blog.id
          // const userId = _this.$store.getters.getUser.id
          deleteBlogs(blogId).then(res => {

            console.log("blogId:===>")
            console.log(blogId)
            console.log('res.data.code===>')
            console.log(res.data.code)
                if (res.data.code='200') {
                  console.log('刪除成功!')
                  _this.$message({type: 'success', message: '删除成功!'});
                  _this.$router.push("/blogs")

                } else {
                  _this.$message({type: 'warning', message: '删除失败，异常错误，请重新操作！'})
                }
              }
          )
        })
      },

      blogdetalls(blogId) {
        const _this = this
        blogdetall(blogId).then(res => {
          // 获取单条博客详情
          const blog = res.data.data
          console.log(blog)
          _this.blog.id = res.data.data.id
          _this.blog.title = res.data.data.title
          // 用maekdownIt进行渲染MD
          var MarkdownIt = require('markdown-it');
          var md = new MarkdownIt();
          var result = md.render(blog.content)
          _this.blog.content = result
          // 判断是否本人id?
          _this.isNoShow = (blog.userId === _this.$store.getters.getUser.id)
        })
      }
    }
  }
</script>

<style scoped>
  .myblog {
    /*element-ui 阴影边框*/
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    min-height: 700px;
    width: 100%;
    padding: 20px 15px;

  }

  .edit {
    margin: 0 auto;
    text-align: center;
  }

  .deleteBlog {
    color: red;
  }
</style>