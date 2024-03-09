<template>
    <div class="talk">
        <button @click="getTalk">获取一句</button>
        <ul>
            <li v-for="item in store.talkList" :key="item.id">{{ item.content }}</li>
        </ul>
    </div>
</template>
  
  <script setup lang="ts" name="loveTalk">
    import axios from 'axios';
    import { storeToRefs } from 'pinia';
    import { useTalkStore } from '@/store/talk'
    const store = useTalkStore()
    const {talkList} = storeToRefs(store)
    store.$subscribe((mutate,state)=>{
      localStorage.setItem('talkList',JSON.stringify(state.talkList))
    })
    function getTalk(){
      axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then(res=>{
            console.log(res.data);
            store.talkList.push({id:Date.now(), content:res.data.content})
        })
    }
  </script>
  
  <style scoped>
    .talk{
        background-color: #7a5a5a;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
  </style>