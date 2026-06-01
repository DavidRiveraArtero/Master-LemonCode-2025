import { useMealStore } from "@/stores/meal.store";
import { storeToRefs } from "pinia";

export const getListMeal = () => {
 
    const store = useMealStore()
    const { mealList } = storeToRefs(store)
    return { mealList }

}
