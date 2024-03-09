<template>
    <div class="category">
        <h2 class="title">{{ title }}</h2>
        <slot name="s1">默认内容</slot> 
        <slot name="s2">默认内容</slot> 
    </div>
</template>
<script setup lang="ts" name="Category">
import { defineProps } from 'vue';
    defineProps(['title'])
</script>
<style>
    .category{
        background-color: cadetblue;
        border-radius: 10px;
        box-shadow: 0 0 10px #00000033;
        padding: 10px;
    }
    .title{
        text-align: center;
    }
</style>