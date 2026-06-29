<template>
  <Teleport to="body">
      <div class="form_container">
        
          <form action="" method="post" v-if="mealFind">
            <input type="text"
                  name="meal"
                  id="meal" 
                  placeholder="Text..."
                  v-if="mealFind"
                  v-model="mealFind.name"
                  :required = true
            >
            <div class="form_container_day">
              <label for="">Select Day</label>
              <select name="day" id="day" v-model="mealDate">
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursady">Thursady</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
            <div class="form_container_period">
              <div>
                <input type="radio" id="lunch" value="lunch" name="lunch" v-model="mealPeriod">
                <label for="lunch">Lunch</label>
              </div>
              <div>
                <input type="radio" id="dinner" value="dinner" name="dinner" v-model="mealPeriod">
                <label for="dinner">Dinner</label>
              </div>
            </div>
            <button v-on:click="handleButtonAddMeal($event)">Add Meal</button>
          </form>

      </div>
  
    </Teleport>
</template>

<script setup lang="ts">
  //import {handleButtonAddMeal, mealFind ,mealPeriod} from "./form.container"

  // STYLES
  import "./form.styles.scss"
  // STORE
  import { useMealStore } from '@/stores/meal.store';
  // UTILITIES 
  import { computed, ref } from "vue";
  import { useRoute, useRouter } from "vue-router";

  let mealName = ref("New Meal")
  let mealDate = ref()
  let mealPeriod = ref("lunch")

  const mealStore = useMealStore()
  const route = useRoute()
  const router = useRouter()
  /* 
    CUANDO ESTA EN EL FICHERO FORM.CONTAINER.TS 
    UNDEFINDER MIRAR COMO HACER QUE SE CARGUE BIEN 
  */
  const mealId = computed(() => route.params.id as string)

  /*
    CUANDO ESTA EN EL FICHERO FORM.CONTAINER.TS 
    SIMPRE REGRESA UNDIFINDE PORQUE EL `mealId` no carga bien el id del router 

  */
  const mealFind = computed(() => mealStore.mealList.find((mealList) => mealList.id === mealId.value))
  mealDate.value = mealFind.value?.date

  const handleButtonAddMeal = async(event:PointerEvent):Promise<void> => {
      event.preventDefault()
      mealStore.UpdateMeal(mealId.value,
      {
        name:mealFind.value?.name === "" ? "ADD VALUE" 
          : 
        mealFind.value?.name, date:mealDate.value, mealPeriod: mealPeriod.value
      })
    
      mealName.value = ""
      router.push("/")
  }
</script>

<!--MIRAR PORQUE NO FUNCIONA EL TRANSITION-->
<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.2s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95);
}

</style>
