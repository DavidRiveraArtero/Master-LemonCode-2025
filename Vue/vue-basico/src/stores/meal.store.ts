import type { MealList } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMealStore = defineStore('mealStore', () => {

    const mealList = ref<MealList[]>([])


    const AddMeal = async (meal:MealList) => {
        const newMeal:MealList = {
            ...meal,
            id: crypto.randomUUID()
        }
        mealList.value.push(await newMeal)
      
        return newMeal
    }
    // REVISAR UNA MEJOR MANERA PARA GUARDAR LOS DATOS EN LOCAL STORAGE 
    const UpdateMeal = (id:string, existingMeal:MealList):void => {
        const meal = mealList.value.find((meal) => meal.id === id)
        if(meal) Object.assign(meal, existingMeal)
        
  
    }

    const filteredMeal = (period:string) => {
        return mealList.value.filter((meal) => meal.mealPeriod?.toLocaleLowerCase() === period.toLocaleLowerCase() )
    }

    return {mealList, AddMeal, UpdateMeal, filteredMeal}
},{
    persist:{
        storage:sessionStorage,
        pick:["mealList"],
    }
})



