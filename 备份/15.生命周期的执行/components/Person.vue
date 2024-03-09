<template>
  <div class="person">
    <h2>当前求和为：{{  sum }}</h2>
    <button @click="clickButton">点我sum+1</button>
  </div>
</template>
<script setup lang="ts" name="Person">
import {ref, onBeforeMount, onMounted,onBeforeUnmount,onUnmounted ,onBeforeUpdate, onUpdated} from "vue";
let sum = ref(0)
function clickButton(){
  sum.value++
}
// 创建
console.log("创建");
// 挂载前
onBeforeMount(()=>{
  console.log("挂载前");
})
// 挂载完毕
onMounted(()=>{
  console.log("子————————挂载完毕");
})
// 卸载前
onBeforeUnmount(()=>{
  console.log("卸载前");
})
// 卸载完毕
onUnmounted(()=>{
  console.log("卸载完毕");
})
// 更新前
onBeforeUpdate(()=>{
  console.log("更新前");
})
// 更新完毕
onUpdated(()=>{
  console.log("更新完毕");
})

</script>

<style>
.person {
  background-color: rgb(94, 104, 104);
  box-shadow: 0 0 10px #000;
  border-radius: 10px;
  padding: 20px;
}
</style>