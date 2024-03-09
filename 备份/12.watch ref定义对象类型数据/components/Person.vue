<template>
  <div class="person">
    <h2>情况二、监视【ref】定义的【对象类型】数据</h2>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改person</button>
  </div>
</template>
<script setup lang="ts" name="Person">
import { ref ,watch} from 'vue';
let person = ref({
  name:'张三',
  age:18
})
function changeName(){
  person.value.name = '__'
}
function changeAge(){
  person.value.age++
}
// 情况二、监视【ref】定义的【对象类型】数据,监测对象的地址值，若想监视对象内部的数据变化，则需要deep配置为true
function changePerson(){
  person.value = {name:'__',age:19}
}
// 若修改的是ref定义的对象中的属性，newValue和oldValue的值相同，因为他们是同一个对象
// 若修改整个ref定义的对象，newValue和oldValue的值不同，因为newValue和oldValue是不同的对象
watch(person,
  (newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
  },
  {deep:true}
)
</script>

<style>
.person {
  background-color: rgb(94, 104, 104);
  box-shadow: 0 0 10px #000;
  border-radius: 10px;
  padding: 20px;
}
</style>