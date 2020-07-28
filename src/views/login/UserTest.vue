<template>
  <div>
    <el-container>
      <el-header>
        <img :src=imgLogoUrl :alt=altLogo1 class="dgong">
      </el-header>
      <el-main>
        <el-form ref="form" :model="form" label-width="80px">

          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <img :src=imgLogoUrl2 :alt=altLogo2 class="dgong2">
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import {usert} from "../../network/loginrequest/user";

  export default {
    name: "UserTest",
    components: {
      usert,
      userData:[],

    },
    data() {
      return {
        imgLogoUrl: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2454294067,744562323&fm=26&gp=0.jpg",
        altLogo1: "打工是不可能打工的，这辈子都不可能打工！",
        imgLogoUrl2: "https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2020-07-23/04f1909cb0c9f09767c6d960b670b524.gif",
        altLogo2: "没人比我更懂美国",
        form: {


        }

      }

    },
    methods: {
      onSubmit() {
        console.log('submit!');
        resrt();
        // usert();
      },
      usert(){
        usert.then(res=>{
          console.log(res)
        })
      },
      resrt(){
        this.$axios.get('http://localhost:8082/user/index').then(res=>{
          console.log(res)
        })
      }
    }

  }
</script>

<style>
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

  .dgong, .dgong2 {
    height: 85%;
    width: 30%;
    margin-bottom: 4.5px;
    margin-top: 4.5px;
  }


</style>