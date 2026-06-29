<template>
      <button :class="styles === undefined ? 'default_button' : styles" @click="func"><span>{{ title }}</span></button>
</template>

<script setup lang="ts">
    import "./button.scss"
    defineProps<{
        title:string
        styles?: string
        func: () => void | Promise<void>
     
    }>()  
</script>



