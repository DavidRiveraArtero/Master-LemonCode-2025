

<template>
  <main>
    <RouterView/>
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<style lang="css" scoped>
    main{
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
</style>