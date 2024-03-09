<template>
  <div class="person">
    <h2>当前求和为：{{  sum }}</h2>
    <button @click="clickButton">点我sum+1</button>
    <hr>
    <img  v-for="(dog,index) in dogList" :src="dog" :key="index">
    <button @click="getDog">get dog</button>
  </div>
</template>
<script setup lang="ts" name="Person">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const {sum,clickButton} = useSum()
const {dogList,getDog} = useDog()
</script>

<style>
.person {
  background-color: rgb(94, 104, 104);
  box-shadow: 0 0 10px #000;
  border-radius: 10px;
  padding: 20px;
}
 img{
  width:100px
 }
</style>