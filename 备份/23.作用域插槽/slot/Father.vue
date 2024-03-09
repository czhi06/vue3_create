<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
        <Game>
            <template v-slot="parmas">
             <ul>
              <li v-for="g in parmas.game" :key="g.id">{{ g.name }}</li>
             </ul>
            </template>
        </Game>
        <Game>
            <template v-slot="parmas">
             <ol>
              <li v-for="item in parmas.game" :key="item.id">{{ item.name }}</li>
             </ol>
            </template>
        </Game>
        <Game/>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
    import Game from './game.vue'
</script>

<style scoped>
    .father {
        background-color: #ccc;
        padding: 10px;
        border-radius: 10px;
    }
    .content{
        display: flex;
        justify-content: space-evenly;
    }
    img,video{
        width: 100%;
    }
</style>