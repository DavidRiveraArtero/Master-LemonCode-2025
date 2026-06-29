<template>

    <section class="section_container">
        <div class="section_container_header">
            <Button title="Clean List" :func="() => handlePopUp()" />
               
        </div>
        <PopUp 
            :show="showPopup" 
            title="Are you sure you want to clean the list??"
            :onConfirm=" () => handleCleanList()"
            @close="showPopup = false"
        >
        </PopUp>

        <div class="section_container_days">
            <div class="section_container_day" v-for="dia in listaSemana">
                <div class="section_container_day_title">
                    <h2 :style="{ color: getRandomColor() }">{{ dia }}</h2>
                </div>
                
                <List_for_dayComponent :meals="mealList.filter((meal) => meal.date == dia)"/>
        
                <Button title="Create Meal"  :func="() => handleCreateMeal(dia)" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    // COMPONENTS
    import List_for_dayComponent from "./components/list_for_day.component.vue";
    import Button from "@/components/button.vue";

    // UTILITIES 
    import { useMealStore } from "@/stores/meal.store";
    import { getListMeal } from "./listMeals.container"
    import { useRouter } from "vue-router";
    import { ref } from "vue";
    
    // STYLES
    import "./listMeals.styles.scss"
    import PopUp from "@/components/popUp.vue";

   

    let colorTitle: string[] = ["#d78a8a", "#378aa1", "#6920c2","#42ae3c","#768515","#b41240","#a42763"]
    const listaSemana = ["Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday", "Sunday"]

    const router = useRouter()
    const {mealList} = getListMeal()
    const mealStore = useMealStore()
    const showPopup = ref(false)

    // BUTTON FOR CREATE A NEW MEAL
    const handleCreateMeal = async (day:string) => {
        const newMeal = mealStore.AddMeal(
            {
                name:"New Meal", 
                date:day, 
                favorite:false
            }
        )

        if(newMeal) router.push(`/meal/${newMeal.id}`)
        
    }

    const handlePopUp = () => {
        showPopup.value = true
    }

    const handleCleanList = () => {
        mealStore.CleanList()
        showPopup.value = false
    }

    const getRandomColor = () => (colorTitle[Math.floor(Math.random() * colorTitle.length)])
    
</script>


