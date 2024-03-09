<template>
    <div class="child2">
        <h3>子组件2</h3>
        <h4>电脑：{{ computer }}</h4>
        <h4>哥哥给的玩具：{{ toy }}</h4>
    </div>
</template> 
<script setup lang="ts" name="child2">
    import {ref , onUnmounted} from 'vue'
    import emitter from '../emitter'
    let computer = ref('联想')
    let toy = ref('')
    // 给emmiter绑定事件
    emitter.on('send-toy',(value:string)=>{
        console.log('',value);
        toy.value = value
    })
    onUnmounted(()=>{
        emitter.off('send-toy')
    })
</script>