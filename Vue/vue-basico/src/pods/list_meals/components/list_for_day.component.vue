<template>
    <ul class="list_for_day">
        <li class="list_for_day_filter_header">
            <div class="list_for_day_filter_header_btn_clear">
                <button v-on:click="handleCleanFilter">Clean</button>
            </div>
            <div class="list_for_day_filter_header_btn_period">
             
                <div>
                    <button v-on:click='handleFilterPeriod("lunch")'>☀️</button>
                    <button v-on:click='handleFilterPeriod("dinner")'>🌕</button>
                </div>
            </div>
        </li>  
        <li v-for="meal in mealList" class="list_for_day_meal">
            <button v-on:click="handleEditButton(meal)"><span>{{ meal.name }}</span></button>
        </li>
    </ul>
</template>

<script setup lang="ts">

    import type { MealList } from '@/types';
    import { useRouter } from 'vue-router';
    import "./list_for_day.styles.scss"
    import { ref, toRefs, watch } from 'vue';


    const props = defineProps<{meals:MealList[]}>()
    const {meals} = toRefs(props)
    const mealList = ref([...meals.value])
    const router = useRouter()

    watch(() => props.meals, (newMeal) => {
        mealList.value = [...newMeal]
    })

    
  
    const handleEditButton = (meal:MealList):void => {
        router.push(`/meal/${meal.id}`)
    }

    // Filtrar por periodo
    const handleFilterPeriod = (period:string) => {
        mealList.value = meals.value.filter((v) => v.mealPeriod?.toLocaleLowerCase() === period.toLocaleLowerCase())
    }

    // LIMPIAR FILTRO
    const handleCleanFilter = () => {
        mealList.value = [...meals.value] 
    }

</script>

