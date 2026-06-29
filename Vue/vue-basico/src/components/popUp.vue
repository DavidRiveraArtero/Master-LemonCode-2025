<template>
    <div class="pop-up" v-if="show">
        <div class="pop-up_container">
            <h3>{{ title }}</h3>
            <div class="pop-up_container_options">
                <Button title="Yes" :func="() => onConfirm()"/>
                <Button title="No" :func="() => emit('close')"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Button from './button.vue';
    import "./popUp.scss"

    const props = defineProps<{
        show:boolean
        title:string
        onConfirm:() => void | Promise<void>
    }>()

    const emit = defineEmits<{
        (e:'close'):void
    }>()


</script>