<template>
    <div class="app">
        <h2>求和为:{{ sum }}</h2>
        <h2>名字为：{{ person.name }}</h2>
        <h2>年龄为：{{ person.age }}</h2>
        <button @click="changeSum">点击求和</button>
    </div>
</template>

<script setup lang="ts" name="App">
    import { ref,shallowRef } from 'vue';
    let sum = shallowRef(0);
    // shallowRef 只处理了对象类型数据的代理，没有处理对象内部值的响应式（内部值还是原始值）\
    //shallowRef的好处
    // 1.如果有一个对象数据，结构比较深,但变化时只是外层属性变化 ===> 使用shallowRef
    // 2.如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> 使用shallowRef
    // shallowReactive
    // 只处理对象类型数据的响应式（内部值还是原始值）
    // 注意：只考虑对象类型（第一层）数据的响应式,不考虑对象内部值的响应式
    // 好处
    // 1.如果有一个对象数据，结构比较深,但变化时只是外层属性变化 ===> 使用shallowReactive
    // 2.如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> 使用shallowReactive
    let person = shallowRef({
     name:'zhangsan',
     age:18   
    })
    function changeSum(){
       sum.value++;
    }
</script>

<style scoped>

</style> 