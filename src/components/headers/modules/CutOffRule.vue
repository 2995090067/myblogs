<template>
  <div class="cut-off-rule">
    <span><el-link :href=blogs>主页</el-link></span>

    <el-divider direction="vertical"></el-divider>

    <span><el-link type="success" :href="blogAdd" @click=Message()>我的发表</el-link></span>

    <el-divider direction="vertical"></el-divider>

    <span v-show='isexit'> <el-link type="danger" @click=loginExit()>退出</el-link></span>
    <span v-show='!isexit'> <el-link type="primary" href="login">登录</el-link></span>
  </div>
</template>

<script>
  import {loginOut} from "../../../network/loginrequest/loginout";

  // 吐司、
  import Toast from "../../toast/js/index";

  export default {
    name: "CutOffRule",
    components: {
      loginOut,
      Toast
    },
    data() {
      return {
        blogs: '/blogs',
        blogAdd: '/blog/add',
        isexit: false,
      }
    },
    created() {
      if (this.$store.getters.getUser.username) {
        this.isexit = true
      }else{
        this.blogAdd = '/blogs'
        this.Message()
      }
    },
    methods: {
      loginExit() {
        //退出登录
        //因为后端token无状态所以不用请求，清空local starge就可以
        console.log('去去去！----loginout')
        this.loginOuts();
      },
      loginOuts() {
        console.log('------------loginin')
        const _this = this;
        //这里发送的请求是promise封装的axios，详见network/requestjs.、loginOut.js
        //也可以直接_this.$axios.get('/logout',{headers:{'Authorization':localstorage.getItem('token')}})
        loginOut().then(res => {
          // 清空userinfo
          _this.$store.commit('REMOVE_INFO');
          // _this.$router.push('/login')
          console.log('开始跳转页面了！')
          _this.$router.push('/logininfo')
        })
      },
      Message() {
        console.log('进入Message')
        if (!(this.$store.getters.getUser.username)) {
          //text 要显示的文字  time显示的毫秒数,type是是否显示图标
          Toast({text: "请先登录！", time: 1000})
              .then(() => {
                console.log("关闭后执行");
              })
              .catch((e) => {
                console.log(e)
              })
        }
      }
    }
  }
</script>

<style scoped>
  .cut-off-rule {
    margin: 10px 0;
  }
</style>