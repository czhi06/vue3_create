<template>
    <div class="news">
        <ul>
           <li v-for="(item) in newsList" :key="item.id">
            <RouterLink :to="`/news/detail/${item.id}/${item.title}/${item.content}`">{{ item.title }}</RouterLink>
           </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
  </template>
  <script lang="ts" setup name="News">
  import { reactive } from 'vue'
  import {RouterView,RouterLink} from 'vue-router'
  const newsList  = reactive([
    {
      id:1,
      title:'一种抗癌食物',content:'西兰花'},
    {
      id:2,
      title:'新闻002',content:'雪兰香'},
    {
      id:3,
      title:'新闻003',content:'过年了'},
    {
      id:4,
      title:'新闻004',content:'发红包'},
  ])
  </script>
  