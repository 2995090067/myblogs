<template>
  <div>
    <el-container>
      <el-header>
        <img class="logo" :src= imgLogoUrl>
      </el-header>
      <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <!--          用户名-->
          <el-form-item label="用户名" prop="username">
            <el-input  v-model="ruleForm.username" ></el-input>
          </el-form-item>
          <!--          密码-->
          <el-form-item label="密码" prop="password">
            <el-input  type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <!--          提交-->
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" >登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置登陆</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {lvLogin} from "../../network/loginrequest/lv";

export default {
    name: "LoginInfo",
    components:{
      lvLogin,
    },
    data() {
      return {
        // isDisable:false,
        imgLogoUrl:"https://exp.bdstatic.com/static/exp-pc/common-jquery/widget/search-box/img/logo_83ae7e2.png",
        ruleForm: {
          username: 'zs',
          password: '123'
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 1, max: 11, message: '长度在 1 到 11 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message:'请输入密码', trigger: 'blur'},
            // blur离开就触发,也可以把数值改为change，改变就触发
            {min: 1, max: 11, message: '长度在1到11位', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {

      submitForm(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
          this.lvLogins(this.ruleForm)

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      // 登陆
      lvLogins(loginDto){
        const _this=this;
              lvLogin(loginDto).then(res=>{
                console.log(res.headers.authorization)
                const jwt=res.headers['authorization']
                console.log("==================================")
                const userInfo=res.data.data
                console.log("jwt=====>");
                console.log(res.headers)
                console.log("res")
                console.log(res);

                console.log("下面是userinfo")
                console.log(userInfo)

                //把数据共享到VUEX
                _this.$store.commit("SET_TOKEN",jwt)
                _this.$store.commit("SET_USERINFO",userInfo)

                console.log("_this.$store.getters.getUser")
                // 获取token
                console.log(_this.$store.getters.getUser)

                //登录成功跳转页面到blogs
                _this.$router.push("/blogs")
              })




      },

    },
  }
</script>

<style>

  /*页面样式*/
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


  .demo-ruleForm {
    max-width: 500px;
    margin: 0 auto;
  }

  /*图片样式*/

  .logo{
    /*width: 20%;*/
    margin-top: 6px;
    margin-bottom: 6px;
    height: 82%;

  }

</style>