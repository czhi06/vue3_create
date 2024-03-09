<template>
    <div class="father">
        <h3>父组件</h3>
        <!-- v-model用在html标签上 -->
        <!-- <input type="text" v-model="username"> -->
        <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value">
    </div>
</template>
<script setup lang="ts" name="Father">
import { ref } from 'vue'
let username = ref('zhangsan')
</script>