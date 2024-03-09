<template>
    <div class="game">
        <h2>游戏列表</h2>
        <slot :game="games"></slot>
    </div>
</template>
<script setup lang="ts" name="Game">
    import { reactive } from 'vue';
    let games = reactive([
    {id:'asdhkajshdkj01',name:'英雄联盟'},
    {id:'asjdhakjshd02',name:'红色警戒'},
    {id:'asdhakhsdkj03',name:'王者荣耀'}])
</script>
<style scoped>
    .game {
        width:200px;
        height:300px;
        background-color: aqua;
        border-radius: 10px;
        box-shadow: 0 0 10px #000;
    }
</style>