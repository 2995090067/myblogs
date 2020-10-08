<template>
  <div class="headers-css">
    <Header>

      <HeaderItem>
<!--        标题语-->
        <span class="welcome" slot="welcome">{{welcomeTextStart}}{{welcomeUser}}{{welcomeTextEnd}}</span>
<!--图标-->
        <el-avatar slot="header-img" :size="50" :src=avatar></el-avatar>
<!--        登陆状态-->
        <span class="to-user-name" slot="to-user-name" @click="loginClick">{{userName.default}}</span>
<!--        <span class="to-user-name" slot="to-user-name" >{{userName.default}}</span>-->

      </HeaderItem>

    </Header>

  </div>
</template>

<script>
  import Header from "./modules/Header";
  import HeaderItem from "./modules/HeaderItem";

  export default {
    name: "Headers",
    components: {
      HeaderItem,
      Header
    },
    data() {
      return {
        welcomeTextStart: "欢迎来到",
        welcomeUser: "Zy",
        welcomeTextEnd: "的博客",
        //是后端的avatar
        avatar: "https://exp.bdstatic.com/static/exp-pc/common-jquery/widget/search-box/img/logo_83ae7e2.png",
        userName: {
          type: String,
          default: "请先登录",
        }
      }
    },
    created() {
      // Vue实例创建后就回去￥store中的信息
      //修改版,这里之前还用了this.$store.getters.getUser.username，其实不难，因为前段不识别null
      if(this.$store.getters.getUser){
        console.log("zzzzzzzzzHeaders.VUR")
        console.log('getUser')
        console.log(this.$store.getters.getUser)
        // 这里分别对应的getUser，也就是userinfo里的数据，username和avatar
        this.userName.default='欢迎登录--'+this.$store.getters.getUser.username;
        this.welcomeUser=this.$store.getters.getUser.username;
        this.avatar=this.$store.getters.getUser.avatar
        // this.userName.default='欢迎登录--'
      }
    },
    methods: {
      loginClick() {
        //比较字符串前先清除所有的空格
        if ('请先登录'.trim()==this.userName.default.trim()) {
          console.log("触发点击事件--前去登陆")
          this.$router.push('/login')
        }else {
          return
        }
      }
    }
  }
</script>

<style scoped>
  .headers-css {
    /*这里由于APP全局设定了max-with，可以不用设定*/
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .to-user-name{
    margin: 7px 0;
  }
  .welcome {
    font-size: 20px;
    color: #193ac4;
    font-weight: bolder;
  }
</style>