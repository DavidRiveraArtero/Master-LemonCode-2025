<template>
    <ul class="list_for_day">
        <li class="list_for_day_filter_header">
            <div class="list_for_day_filter_header_btn_clear">
                <button v-on:click="handleCleanFilter">Clean</button>
            </div>
            <div class="list_for_day_filter_header_btn_period">
                <button v-on:click='handleFilterPeriod("lunch")'>☀️</button>
                <button v-on:click='handleFilterPeriod("dinner")'>🌕</button>
            </div>
        </li>  
        <li v-for="meal in mealList" class="list_for_day_meal">
            <button class="list_for_day_meal_btn_edit" v-on:click="handleEditButton(meal)">
                <span>{{ meal.name }}</span>
            </button>

            <button v-on:click="handleFavButton(meal, meal.favorite!)" class="list_for_day_meal_btn_fav">
                <svg :class="{svg_isFav: meal.favorite}" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                        </path> 
                    </g>
                </svg>
            </button>

            <button class="list_for_day_meal_btn_delete" v-on:click="handleDeleteButton(meal)">
                <img src="@/assets/trash.svg" alt="delte button meal ">
            </button>
        </li>
    </ul>
</template>

<script setup lang="ts">

    import type { MealList } from '@/types';
    import { useRouter } from 'vue-router';
    import "./list_for_day.styles.scss"
    import { ref, toRefs, watch } from 'vue';
    import { useMealStore } from '@/stores/meal.store';


    const props = defineProps<{meals:MealList[]}>()
    const {meals} = toRefs(props)
    const mealList = ref([...meals.value])
    const mealStore = useMealStore()
    const router = useRouter()

    watch(() => props.meals, (newMeal) => {
        mealList.value = [...newMeal]
    })

    const handleEditButton = (meal:MealList):void => {
        router.push(`/meal/${meal.id}`)
    }

    const handleFavButton = (meal:MealList,fav:boolean):void => {
        mealStore.UpdateMeal(meal.id!, {...meal, favorite:!fav})
        
    }

    const handleDeleteButton = async(meal:MealList):Promise<void> => {
        mealStore.DeleteMeal(meal.id!)
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

