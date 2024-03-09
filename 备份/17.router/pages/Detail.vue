<template>
    <div class="detail">
        <ul>
            <li>编号：{{ id }}</li>
            <li>标题：{{ title }}</li>
            <li>内容：{{ content }}</li>
        </ul>
    </div>
</template>
<script lang="ts" setup name="Detail">
// import { useRoute } from 'vue-router';
// import { toRefs } from 'vue';
// const route = useRoute();
defineProps(['id', 'title', 'content']);
// let { id, title, content } = toRefs(route.params);
// console.log(route.params.id);
</script>
<style>
</style>