<template>
  <div id="index">
    <div class="header-nav">
      <div>
        <img src="https://picsum.photos/200" alt />
        <span>阿金King空间站</span>
      </div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#000"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/works">作品</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
    </div>
    <router-view />

    <fooder></fooder>
  </div>
</template>

<script>
import fooder from "../common/fooder.vue";

export default {
  name: "index",
  components: {
    fooder
  },
  // 跨域问题
  /*
  proxyTable:{
    '/api':{
      target:'http://localhost:9000/',
      changeOrigin:true,
      pathRewrite:{
        '^/api':'/'
      }
    }
  }

  */
  created(){
    this.axios.get('http://129.211.93.21/api/type/list').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  data() {
    return {
      activeIndex: "/home",
      activeIndex2: "/home"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
#index .header-nav {
  background: #000;
  width: 100%;
  height: 80px;
  display: -webkit-flex;
  align-items: center;
}
#index .header-nav img {

  height: 60px;
  width: 60px;
  border-radius: 50%;
}
/* 去掉Nav 横向 */
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.header-nav > div {
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-left: 10%;
  margin-right: 5%;
}
.header-nav > div span {
  margin-left: 20px;
}
</style>
