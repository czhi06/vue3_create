<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>电子邮箱：{{ email }}</h2>
    <!-- <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showEmail">展示电子邮箱</button> -->
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "Person",
  data() {
    // vue2的写法可以读取到setup中的数据
    return {
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
    };
  },
  methods: {
    showEmail() {
      alert(this.email);
    },
    changeName() {
      this.name = "Jane Smith";
    },
    changeAge() {
      this.age = 40;
    },
  },
  setup() {
    // vue3的写法无法读取到vue2中的数据
    let name = ref("张三");
    let age = ref(18);
    let email = ref("zhangsan@example.com");
    // function changeName() {
    //   name.value = "李四";
    // }
    // function changeAge() {
    //   age.value = 20;
    // }
    // function showEmail() {
    //   console.log(email.value);
    // }
    return {
      name,
      age,
      email,
    };
  },
};
</script>

<style>
.person {
  background-color: rgb(94, 104, 104);
  box-shadow: 0 0 10px #000;
  border-radius: 10px;
  padding: 20px;
}
</style>