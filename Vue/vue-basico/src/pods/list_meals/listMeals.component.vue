<template>
    <section class="section_container">
        <div class="section_container_day" v-for="dia in listaSemana">

            <div class="section_container_day_title">
                <h2 :style="{ color: getRandomColor() }">{{ dia }}</h2>
            </div>
            
            <List_for_dayComponent :meals="mealList.filter((meal) => meal.date == dia)"/>
       
            <button class="section_container_day_add_meal" v-on:click="handleCreateMeal(dia)"><span>Create Meal</span></button>
        </div>
    </section>
</template>

<script setup lang="ts">
    // COMPONENTS
    import List_for_dayComponent from "./components/list_for_day.component.vue";
    
    // UTILITIS 
    import { useMealStore } from "@/stores/meal.store";
    import {getListMeal} from "./listMeals.container"
    import { useRouter } from "vue-router";

    // STYLES
    import "./listMeals.styles.scss"

    let colorTitle: string[] = ["#d78a8a", "#378aa1", "#6920c2","#42ae3c","#768515","#b41240","#a42763"]
    const listaSemana = ["Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday", "Sunday"]

    const router = useRouter()
    const {mealList} = getListMeal()
    const mealStore = useMealStore()

    // BUTTON FOR CREATE A NEW MEAL
    const handleCreateMeal = async (day:string) => {
        const newMeal = await mealStore.AddMeal(
            {
                name:"New Meal", 
                date:day, 
                favorite:false
            }
        )

        if(newMeal) router.push(`/meal/${newMeal.id}`)
        
    }

    const getRandomColor = () => (colorTitle[Math.floor(Math.random() * colorTitle.length)])
    
</script>


