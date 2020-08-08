<template>
  <div>
    <headers></headers>
    <div class="m-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="摘要" prop="description">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <!--          编辑器-->
          <mavon-editor v-model="ruleForm.content"></mavon-editor>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>


    </div>
  </div>
</template>

<script>
  import Headers from "../../components/headers/Headers";
  import {blogedit} from "../../network/blogedit/blogedit";
  import {blogdetall} from "../../network/blogdetall/blogdetall";

  export default {
    name: "BlogEdit",
    components: {
      Headers,
      blogedit,
      blogdetall
    },
    data() {
      return {
        ruleForm: {
          id:'',
          title: '',
          description: '',
          content: ''
        },
        rules: {
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'},
            {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
          ],
          description: [
            {required: true, message: '请填摘要', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ]
        }
      };
    },
    created() {
      // 内容回显，获取id，来自路由
      // 这个是编辑页面！获取的是这个blogId
      // path: '/blog/:blogId/edit',
      const blogId=this.$route.params.blogId
      console.log(blogId)
      this.blogdetalls(blogId)
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.BlogEdit(this.ruleForm)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      BlogEdit(Blog){
        const _this=this
        blogedit(Blog).then(res=>{
          console.log('res====>')
          console.log(res)
          // elementUI的消息提示
          this.$message({
            // 状态改为警告未登陆
            // warning
            type:'success',
            // 显示时长1秒
            duration:1000,
            message: `发表成功--!`,
            // 视距，默认20 px ,值是number
            offset:40,
            // 字体显示是否居中
            center:true
          })
          //成功发表跳转页面至详情页
          this.$router.push("/blogs")

        })
      },
      blogdetalls(blogId){
        const _this=this
      blogdetall(blogId).then(res=>{
          // 获取单条博客详情
          const blog =res.data.data
          console.log(blog)
        _this.ruleForm.id=res.data.data.id
        _this.ruleForm.title=res.data.data.title
        _this.ruleForm.description=res.data.data.description
        _this.ruleForm.content=res.data.data.content


        })
      }
    }
  }
</script>

<style scoped>
  .m-content {
    margin: 0 auto;
    text-align: center;
  }
</style>