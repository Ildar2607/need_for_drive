<template>
    <v-main-wrapper/>
    привет
</template>

<script>


    import vMainWrapper from './components/v-main-wrapper'

    export default {
        name: 'App',
        components: {
            vMainWrapper,
        },
        computed: {},
        methods: {},
        watch: {},
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
