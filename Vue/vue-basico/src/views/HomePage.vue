<script setup lang="ts">

import ListMealsComponent from '@/pods/list_meals/listMeals.component.vue';

</script>

<template>
    <header>
        <h1>Header</h1>
    </header>

    <ListMealsComponent/>
 
    <RouterView/>

</template>

<script  lang="ts">
    import { RouterView } from 'vue-router';
    
</script>

