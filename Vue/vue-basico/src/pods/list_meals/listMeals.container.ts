import { useMealStore } from "@/stores/meal.store";

export const getListMeal = () => {
    const {mealList} = useMealStore()
    return {mealList}
}
