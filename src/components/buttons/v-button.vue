<template>
    <button class="v-button">
        <span class="v-button__bg"></span>
        <span class="v-button__filling"></span>
        <span class="v-button__active"></span>
        <span class="v-button__name text_weight_medium" >{{name}}</span>
    </button>
</template>

<script>
    export default {
        name: "v-button",
        props: {
            name,
        }
    }
</script>

<style scoped>

</style>