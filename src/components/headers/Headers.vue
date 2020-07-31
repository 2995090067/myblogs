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
      Header,
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
      if(this.$store.getters.getUser.username){
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
        if (this.userName.default = '请先登陆') {
          console.log("触发点击事件")
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