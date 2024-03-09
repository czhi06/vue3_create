<template>
  <div class="person">
   
  </div>
</template>
<script setup lang="ts" name="Person">
import {type PersonInter , type Persons} from '@/types'
let person:PersonInter = {id:'asdasdasdad',name:'张三',age:20}
let personList: Persons = [
  {id:'asdasdasdad2',name:'张三',age:20},
  {id:'asdasdasdad1',name:'张三',age:21},
  {id:'asdasdasdad3',name:'张三',age:18}]
</script>

<style>
.person {
  background-color: rgb(94, 104, 104);
  box-shadow: 0 0 10px #000;
  border-radius: 10px;
  padding: 20px;
}
</style>