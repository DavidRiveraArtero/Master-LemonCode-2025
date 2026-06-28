<template>
    <header class="header_container">
        <h1>Meal Calendar</h1>
        <div class="header_container_links">
            <router-link to="/" :class="{ 'activo': route.path === '/' }">Calendar </router-link>
            <router-link to="/favorite" :class="{ 'activo': route.path === '/favorite' }">Favorite </router-link>
        </div>
    </header>
</template> 

<script lang="ts" setup>
    import { useRoute } from "vue-router";
    import "./header.style.scss"

    const route = useRoute()
    route.path
</script>
