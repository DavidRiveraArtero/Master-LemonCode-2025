import "./form.styles.scss"

import { computed, ref, type ComputedRef } from "vue";
import { useMealStore } from '@/stores/meal.store';
import { useRoute } from "vue-router";

export let mealName = ref("")
export let mealPeriod = ref("")

const mealStore = useMealStore()
const route = useRoute()



export const getMealFind = () => {
    // UNDEFINDER MIRAR COMO HACER QUE SE CARGUE BIEN 
    const mealId = computed(() => route?.params.id as string)

    // SIMPRE REGRESA UNDIFINDE PORQUE EL `mealId` no carga bien el id del router
    const mealFind = computed(() => mealStore.mealList.find((mealList) => mealList.id === mealId.value) ?? {name:"hola"})

    return mealFind

}

export const handleButtonAddMeal = async(event:PointerEvent):Promise<void> => {

    event.preventDefault()
    mealPeriod.value = ""
    mealName.value = ""
}