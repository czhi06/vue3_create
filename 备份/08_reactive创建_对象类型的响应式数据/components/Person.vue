<template>
  <div class="person">
    <h2>一辆{{ car.name }}车价值{{ car.price }}</h2>
    <button @click="changeCarPrice">修改汽车的价格</button>
    <br />
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="item in gameList" :key="item.name">{{ item.name }}</li>
    </ul>
    <button @click="changeFirst">修改第一个游戏的名字</button>
  </div>
</template>
<script setup lang="ts" name="Person">
import { reactive } from "vue";
let car = reactive({
  name: "BMW",
  price: "30w",
});
let gameList = reactive([
  { name: "LOL", price: "60" },
  { name: "CF", price: "40" },
  { name: "BattleGround", price: "50" },
]);
function changeCarPrice() {
  car.price = "50w";
}
function changeFirst() {
  gameList[0].name = "DNF";
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