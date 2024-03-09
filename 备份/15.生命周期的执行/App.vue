<template>
  <Person v-if="isShow" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { onMounted, ref } from "vue";
let isShow = ref(true);
// 挂载完毕
onMounted(()=>{
  console.log("子————————挂载完毕");
})
</script>
