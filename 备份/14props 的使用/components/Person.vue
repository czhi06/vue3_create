<template>
  <div class="person">
    {{ a }}
  </div>
</template>
<script setup lang="ts" name="Person">
import {type Persons } from '@/types';
import { defineProps ,withDefaults} from 'vue'
  // 接收a
  defineProps(['a'])
  // 接收a，同时将props保存起来
  let x = defineProps(['a'])
  // 只接收list
  // defineProps(['list'])
  // 接收list + 限制类型
  // defineProps<{list:Persons}>()
  // 接收list + 限制类型 + 默认值 + 指定默认值
  // withDefaults(defineProps<{list?: Persons}> (),{
  //   list:()=>[{id:'asdasda1',name:'张三',age:18}]})
</script>

<style>
.person {
  background-color: rgb(94, 104, 104);
  box-shadow: 0 0 10px #000;
  border-radius: 10px;
  padding: 20px;
}
</style>