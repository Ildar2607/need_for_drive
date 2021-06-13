<template>
    <div class="slider">
        <flickity class="slider__wrap" ref="flickity" :options="flickityOptions">
            <div class="slider__item"
                 v-for="(slide, index) in slides"
                 :key="index + 'slide'"
            >
                <img :src="slide.img" alt="img">
                <div class="slider__text">
                    <h2 class="slider__title text_weight_medium">
                        {{slide.title}}
                    </h2>
                    <p>
                       {{slide.subtitle}}
                    </p>
                    <v-button class="v-button_size_l" name="Подробнее"/>
                </div>
            </div>
        </flickity>
        <button class="slider__button prev" @click="previous()">
            <svg class="arrow">
                <use xlink:href="../../assets/sprite.svg#prev"></use>
            </svg>
        </button>
        <button class="slider__button next" @click="next()">
            <svg class="arrow">
                <use xlink:href="../../assets/sprite.svg#next"></use>
            </svg>
        </button>
        <svg display="none">
            <symbol id="next" viewBox="0 0 10 20">
                <path d="M1 1L9 10L1 19" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>
            <symbol id="prev" viewBox="0 0 10 20">
                <path d="M9 1L1 10L9 19" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>
        </svg>
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
                    wrapAround: true,
                },
                slides: [
                    {
                        img: "../../assets/img/main-slides/1.jpg",
                        title: "Бесплатная парковка",
                        subtitle: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
                    },
                    {
                        img: "../../assets/img/main-slides/2.jpg",
                        title: "Страховка",
                        subtitle: "Полная страховка страховка автомобиля",
                    },
                    {
                        img: "../../assets/img/main-slides/3.jpg",
                        title: "Бензин",
                        subtitle: "Полный бак на любой заправке города за наш счёт",
                    },
                    {
                        img: "../../assets/img/main-slides/4.jpg",
                        title: "Обслуживание",
                        subtitle: "Автомобиль проходит еженедельное ТО",
                    }
                ]
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