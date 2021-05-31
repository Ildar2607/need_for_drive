<template>
    <div class="v-menu">
        <div class="v-menu__burger burger">
            <div class="burger__open">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 8H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 24H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="v-menu__language language">
            <div class="language__eng text_weight_bold">
                Eng
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-menu"
    }
</script>

<style scoped>

</style>