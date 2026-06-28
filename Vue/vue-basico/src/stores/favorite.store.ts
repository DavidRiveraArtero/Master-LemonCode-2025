import type { MealList } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteMealStore = defineStore('favoriteMealStore', () => {

    const favoriteMealList = ref<MealList[]>([])


    const AddFavoriteMeal = (meal:MealList) => {
        if(!favoriteMealList.value.find((favMeal) => favMeal.id === meal.id)) favoriteMealList.value.push(meal)
    }

    const DeleteFavoriteMeal = (id:string):void => {
        const index = favoriteMealList.value.findIndex(meal => meal.id === id)
        if(index !== -1 ){
            favoriteMealList.value.splice(index, 1)

        }
    }



    return {favoriteMealList, AddFavoriteMeal , DeleteFavoriteMeal}
},{
    persist:{
        storage:sessionStorage,
        pick:["favoriteMealList"],
    }
})