<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
        <Category>
           <template v-slot:s2>
            <ul>
                <li v-for="item in games" :key="item.id">{{ item.name }}</li>
            </ul>
           </template>
           <template v-slot:s1>
            <h3>热门游戏列表</h3>
           </template>
        </Category>
        <Category title="今日美食城市">
            <img :src="imgUrl" alt="">
        </Category>
        <Category title="今日影视推荐">
            <video :src="video"></video>
        </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
    import Category from './Category.vue';
    import {ref,reactive} from 'vue'
    let games = reactive([
    {id:'asdhkajshdkj01',name:'英雄联盟'},
    {id:'asjdhakjshd02',name:'红色警戒'},
    {id:'asdhakhsdkj03',name:'王者荣耀'}])
    let imgUrl = ref('https://cn.vuejs.org/images/logo.svg')
    let video = ref('https://cn.vuejs.org/videos/01-setup.mp4')
</script>

<style scoped>
    .father {
        background-color: #ccc;
        padding: 10px;
        border-radius: 10px;
    }
    .content{
        display: flex;
        justify-content: space-evenly;
    }
    img,video{
        width: 100%;
    }
</style>