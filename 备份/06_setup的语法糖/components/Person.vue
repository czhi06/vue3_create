<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>电子邮箱：{{ email }}</h2>
    <h2>地址:{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showEmail">展示电子邮箱</button>
  </div>
</template>
<script setup lang="ts" name="Person">
import { ref } from "vue";
// vue3的写法无法读取到vue2中的数据
let name = ref("张三");
let age = ref(18);
let email = ref("zhangsan@example.com");
let address = ref("北京");
function changeName() {
  name.value = "李四";
}
function changeAge() {
  age.value = 20;
}
function showEmail() {
  console.log(email.value);
}
</script>

<style>
.person {
  background-color: rgb(94, 104, 104);
  box-shadow: 0 0 10px #000;
  border-radius: 10px;
  padding: 20px;
}
</style>