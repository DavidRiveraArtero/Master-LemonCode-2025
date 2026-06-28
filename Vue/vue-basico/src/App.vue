

<template>
  <Header/>
  <main>
    <RouterView/>
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
import Header from './views/Header.vue';
</script>

<style lang="css" scoped>
  main{
    display: flex;
    flex-direction: column;
    padding: var(--padding-lg);
  }
</style>