<template>
    <div>
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <button  @click="emitter.emit('send-toy',toy)">玩具触发</button>
    </div>
</template>
<script setup lang="ts" name="child1">
    import {ref} from 'vue'
    import emitter from '../emitter'
    let toy = ref('变形金刚')
</script>