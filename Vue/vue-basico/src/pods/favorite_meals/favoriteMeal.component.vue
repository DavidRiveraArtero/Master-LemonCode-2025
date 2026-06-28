<template>

    <p v-if="favoriteMeals.length === 0">No hay platos favoritos</p>
    <div v-else class="favorite_container">
        <div v-for="meal in favoriteMeals" class="favorite_container_meal">
            <h3>{{ meal.name }}</h3>
            <div class="favorite_container_meal_options">
                <button v-on:click="handleAddToList(meal)" class="section_container_day_add_meal">Add to List</button>
                <button v-on:click="handleDeleteFavorite(meal)" class="section_container_day_add_meal">Delete</button>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
    import { useFavoriteMealStore } from '@/stores/favorite.store';
    import { ref } from 'vue';
    import { useMealStore } from '@/stores/meal.store';
    import type { MealList } from '@/types';

    import "./favoriteMeal.styles.scss"


    const favoriteMealStore = useFavoriteMealStore()
    const mealStore = useMealStore()
    const favoriteMeals = ref(favoriteMealStore.favoriteMealList)

    const handleDeleteFavorite = (meal:MealList):void => {
        favoriteMealStore.DeleteFavoriteMeal(meal.id!)
        mealStore.UpdateMeal(meal.id!, {...meal, favorite:false})
    }

    const handleAddToList = (meal:MealList):void => {
        mealStore.AddMeal({...meal, favorite:false})
    }

</script>

