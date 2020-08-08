<template>
  <div>
    <headers></headers>
    <div class="myblog">
      <!--标题-->
      <h2>{{blog.title}}</h2>
      <!--分割线-->
      <el-divider></el-divider>
      <!--      内容-->
      <!--      markdown-body,引入样式-->
      <div class="markdown-body" v-html="blog.content">

      </div>

    </div>
    <div class="edit">
      <!--      编辑按钮-->
      <el-button type="primary" icon="el-icon-edit">
        <router-link :to="{path:'/blog/'+blog.id+'/edit'}">
          编辑博客
        </router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
  import Headers from "../../components/headers/Headers";
  import {blogdetall} from "../../network/blogdetall/blogdetall";
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
        }

      }
    },
    created() {
      // 初始化
      const blogId = this.$route.params.blogId
      console.log(blogId)
      this.blogdetalls(blogId)
    },
    methods: {
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
  .edit{
    margin: 0 auto;
    text-align: center;
  }
</style>