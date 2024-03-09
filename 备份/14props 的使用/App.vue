<template>
  <Person a="hehe" :list="personList"/>
</template>

<script lang="ts" setup name="App">
// javaScript
import Person from "./components/Person.vue";
import { reactive } from "vue";
import{ type Persons} from '@/types/index'
let personList = reactive<Persons>([{ name: "张三", age: 18,id:'asdhjahsjk1'},
  { name: "李四", age: 19,id:'asdhjahsjk2'},
  { name: "王五", age: 20,id:'asdhjahsjk3'}])
</script>
