<template>
    <div class="about">
        about
    </div>
  </template>
  <script lang="ts" setup name="About">
  import {onMounted,onUnmounted} from 'vue'
  onMounted(()=>{
    console.log('about组件挂载了')
  })
  onUnmounted(()=>{
    console.log('about组件卸载了')
  })
  </script>
  