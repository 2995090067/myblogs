<template>
  <div class="block">
    <!--      头部组件-->
    <Headers></Headers>
    <!--      自定义时间戳-->
    <el-timeline>
      <el-timeline-item :timestamp="blog.created" placement="top" v-for="blog in blogs">
        <el-card>
          <router-link :to="{path:'/blog/'+blog.id}">
<!--            如果有给路由命名可以用下面的-->
<!--          <router-link :to="{name:'BolgDetall',params:{blogId:blog.id}}">-->
            <h4>{{blog.title}}</h4>
          </router-link>
          <p>{{blog.description}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <!--分页-->
    <el-pagination class="pagination"
                   background
                   layout="prev, pager, next"
                   :current-page="currentPage"
                   :page-size="pageSize"
                   :total="total"
                   @current-change=currentPagel>
<!--      调用跳转页面-->
    </el-pagination>
  </div>
</template>

<script>
  import Headers from "../../components/headers/Headers";
  import {currentPages} from "../../network/page/currentPage";

  export default {
    name: "Blogs",
    components: {
      // 注册一下组件
      Headers,
      currentPages,
    },
    data() {
      return {
        blogs: {},
        currentPage: 1,
        total: 0,
        pageSize: 5
      }
    },
    created() {
      //默认第一页
      this.currentPagel(1)
    },
    methods: {
      currentPagel(currentPage) {
        console.log('触发点击事件')
        console.log(currentPage)
        const _this = this
        currentPages(currentPage).then(res => {
          console.log(res)
          //这里注意的是获取表里的所有数据而不是一条数据，所以下面的对应的是获取的data.data的信息而不是仅为records的信息
          _this.blogs = res.data.data.records
          _this.currentPage = res.data.data.current
          _this.total = res.data.data.total
          _this.pageSize = res.data.data.size
        })
      }
    }
  }
</script>

<style scoped>
  .pagination {
    margin: 0 auto;
    text-align: center;
  }
</style>