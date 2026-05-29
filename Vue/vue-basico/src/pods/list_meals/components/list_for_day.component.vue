<template>
    <ul class="list_for_day">
        <li class="list_for_day_filter_header">
            <div class="list_for_day_filter_header_btn_clear">
                <button v-on:click="handleCleanFilter">Clean</button>
            </div>
            <div class="list_for_day_filter_header_btn_period">
                <div class="selected"></div>
                <div>
                    <button v-on:click='handleFilterPeriod("lunch")'>☀️</button>
                    <button v-on:click='handleFilterPeriod("dinner")'>🌕</button>
                </div>
            </div>
        </li>  
        <li v-for="meal in meals" class="list_for_day_meal">
            <button v-on:click="handleEditButton(meal)"><span>{{ meal.name }}</span></button>
        </li>
    </ul>
</template>

<script setup lang="ts">

    import type { MealList } from '@/types';
    import { useRouter } from 'vue-router';
    import "./list_for_day.styles.scss"
    import { onBeforeUpdate, onUpdated, ref } from 'vue';


    const {meals} = defineProps<{meals:MealList[]}>()
    const mealList = ref(meals)

    const router = useRouter()
  
    const handleEditButton = (meal:MealList):void => {
        router.push(`/meal/${meal.id}`)
    }

    // MIRAR SI HAY ALGUNA FORMA DE NO REASIGNAR TODO EL RATO EL MEALS EN LA NUEVA LISTA
    const handleFilterPeriod = (period:string) => {
        
        mealList.value = meals.filter((v) => v.mealPeriod?.toLocaleLowerCase() === period.toLocaleLowerCase())
    }

    // LIMPIAR FILTRO
    const handleCleanFilter = () => {
        mealList.value = meals 
    }

</script>

