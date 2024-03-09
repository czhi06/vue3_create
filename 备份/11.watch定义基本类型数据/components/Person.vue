<template>
  <div class="person">
    <h2>情况一、监视【ref】定义的【基本类型】数据</h2>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="buttonChange">点sum+1</button>
  </div>
</template>
<script setup lang="ts" name="Person">
import { ref ,watch} from 'vue';
const sum = ref(0);
function buttonChange() {
  sum.value++;
  console.log(sum.value);
}
 const stopWatch = watch(sum,
  (newValue, oldValue) => {
    console.log('sum的值变化了', newValue, oldValue);
    if(newValue === 10){
      stopWatch();
      console.log('停止监视');
    }
  },
  
);
</script>

<style>
.person {
  background-color: rgb(94, 104, 104);
  box-shadow: 0 0 10px #000;
  border-radius: 10px;
  padding: 20px;
}
</style>