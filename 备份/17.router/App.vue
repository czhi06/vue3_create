<template>
  <div class="app">
    <h2>vue路由测试</h2>
 <!--导航区域-->   
 <div class="navigate">
  <RouterLink to="/home">首页</RouterLink>
  <RouterLink :to="{path:'/news'}">新闻</RouterLink>
  <RouterLink :to="{name:'关于'}">关于</RouterLink>
 </div>
 <!--展示区-->
 <div class="main-content">
  展示
  <RouterView></RouterView>
 </div>
  </div>
</template>
<script lang="ts" setup name="App">
  import { RouterView , RouterLink} from 'vue-router'
</script>
