<template>
    <div class="slider">
        <flickity class="slider__wrap" ref="flickity" :options="flickityOptions">
            <div class="slider__item">
                <img src="../../assets/img/main-slides/1.jpg" alt="">
                <div class="slider__text">
                    <h2 class="slider__title text_weight_medium">
                        Бесплатная парковка
                    </h2>
                    <p>
                        Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
                    </p>
                    <v-button class="v-button_size_l" name="Подробнее"/>
                </div>
            </div>
            <div class="slider__item">
                <img src="../../assets/img/main-slides/2.jpg" alt="">
                <div class="slider__text">
                    <h2 class="slider__title text_weight_medium">
                        Бесплатная парковка
                    </h2>
                    <p>
                        Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
                    </p>
                    <v-button class="v-button_size_l" name="Подробнее"/>
                </div>
            </div>
            <div class="slider__item">
                <img src="../../assets/img/main-slides/3.jpg" alt="">
                <div class="slider__text">
                    <h2 class="slider__title text_weight_medium">
                        Бесплатная парковка
                    </h2>
                    <p>
                        Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
                    </p>
                    <v-button class="v-button_size_l" name="Подробнее"/>
                </div>
            </div>
            <div class="slider__item">
                <img src="../../assets/img/main-slides/4.jpg" alt="">
                <div class="slider__text">
                    <h2 class="slider__title text_weight_medium">
                        Бесплатная парковка
                    </h2>
                    <p>
                        Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
                    </p>
                    <v-button class="v-button_size_l" name="Подробнее"/>
                </div>
            </div>
        </flickity>
        <button class="slider__button prev" @click="previous()">
            <svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L1 10L9 19" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button class="slider__button next" @click="next()">
            <svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 10L1 19" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</template>

<script>
    import Flickity from 'vue-flickity';
    import VButton from "../buttons/v-button";

    export default {
        name: "slider",
        components: {VButton, Flickity},
        props: {},
        data() {
            return {
                flickityOptions: {
                    prevNextButtons: false,
                    wrapAround: true

                    // any options from Flickity can be used
                },
            }
        },
        methods: {
            next() {
                this.$refs.flickity.next();
            },

            previous() {
                this.$refs.flickity.previous();
            }
        }
    }
</script>

<style scoped>

</style>