import HomePage from '@/views/HomePage.vue'
import favoriteMealComponent from '@/pods/favorite_meals/favoriteMeal.component.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"Home",
      component: HomePage,
      children:[
        {
          path: "meal/:id",
          name:"meal",
          component:() => import("@/pods/form_meals/form.component.vue"),
          props:true
        }
      ]
    },
    {
      path:"/favorite",
      name:"Favorite Meals",
      component: favoriteMealComponent
    }
  ],
  
})

export default router
