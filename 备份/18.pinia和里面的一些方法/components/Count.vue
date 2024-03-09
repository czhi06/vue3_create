<template>
    <div class="count">
        <h2>当前求和为：{{ store.sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="minus">➖</button>
        <button @click="add">➕</button>
    </div>
  </template>
  
  <script setup lang="ts" name="App">
 import { ref } from 'vue'
 import { storeToRefs } from 'pinia';
 import {useStore} from '@/store/count'
 const store = useStore()
 // storeToRefs 只会关注store中的数据，如果store中的数据发生变化，那么refs中的数据也会跟着变化
 const { sum,name,age,bigSum } = storeToRefs(store)
 const n = ref(1)

 function add(){
    // 第一种修改方式
    store.sum += 1
    // 第二种修改方式
    store.$patch({
        sum: store.sum + n.value
    })
 }
 function minus(){
    store.sum -= n.value
 }
  </script>
  
  <style scoped>
    .count {
        background-color: aqua;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select,button{
        margin:0 5px;
        height:30px;
    }
  </style>