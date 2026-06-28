import type { MealList } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useFavoriteMealStore } from "./favorite.store";

export const useMealStore = defineStore('mealStore', () => {

    const mealList = ref<MealList[]>([])
    const favoriteMealStore = useFavoriteMealStore()

    const AddMeal = (meal:MealList) => {
        const newMeal:MealList = {
            ...meal,
            id: crypto.randomUUID()
        }
        mealList.value.push(newMeal)
        
        return newMeal
    }

    const UpdateMeal = (id:string, existingMeal:MealList):void => {
        const meal = mealList.value.find((meal) => meal.id === id)
        Object.assign(meal!, existingMeal)

        if(existingMeal.id){
            if(existingMeal.favorite === true){
                favoriteMealStore.AddFavoriteMeal(existingMeal)
            }else{
                favoriteMealStore.DeleteFavoriteMeal(existingMeal.id)
            }
        }

    }

    const DeleteMeal = (id:string):void => {
        mealList.value.splice(mealList.value.findIndex((meal) => meal.id === id), 1)
    }

    const filteredMeal = (period:string) => {
        return mealList.value.filter((meal) => meal.mealPeriod?.toLocaleLowerCase() === period.toLocaleLowerCase() )
    }


    return {mealList, AddMeal, UpdateMeal, filteredMeal, DeleteMeal}
},{
    persist:{
        storage:sessionStorage,
        pick:["mealList"],
    }
})



