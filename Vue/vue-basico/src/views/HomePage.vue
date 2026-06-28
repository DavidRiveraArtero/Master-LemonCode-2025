<script setup lang="ts">

import ListMealsComponent from '@/pods/list_meals/listMeals.component.vue';

</script>

<template>
    <ListMealsComponent/>
    <RouterView/>
</template>

<script  lang="ts">
    import { RouterView } from 'vue-router';
</script>

