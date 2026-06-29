<template>

    <p v-if="favoriteMeals.length === 0">No hay platos favoritos</p>
    <div v-else class="favorite_container">
        <div v-for="meal in favoriteMeals" class="favorite_container_meal">
            <h3>{{ meal.name }}</h3>
            <div class="favorite_container_meal_options">
                <Button title="Delete" :func="() => handleDeleteFavorite(meal)"/>
                <Button title="Add to List" :func="() => handleAddToList(meal)" />
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
    // COMPONENTS
    import Button from '@/components/button.vue';

    // STORE
    import { useFavoriteMealStore } from '@/stores/favorite.store';
    import { useMealStore } from '@/stores/meal.store';
    import type { MealList } from '@/types';

    // STYLES
    import "./favoriteMeal.styles.scss"
    // UTILITIES
    import { ref } from 'vue';

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

