<template>
  <div class="person">
    姓: <input type="text" v-model="firstName"> <br>
    名: <input type="text" v-model="lastName">
    全名：<span>{{ fullName  }}</span>
    <button @click="changeName">按钮</button>
  </div>
  <div class="Person"></div>
</template>
<script setup lang="ts" name="Person">
  import { computed, ref } from 'vue'
  let firstName = ref('zhang')
  let lastName = ref('san')
  let fullName = computed({
    get(){
      return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + ' ' + lastName.value
    },
    set(val){
      const [str1,str2] = val.split('-')
      firstName.value = str1
      lastName.value = str2
      console.log(val)
    }
  })
  function changeName() {
    firstName.value = 'li'
    lastName.value = 'si'
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