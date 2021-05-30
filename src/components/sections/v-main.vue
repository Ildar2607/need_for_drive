<template>
    <div class="v-main">
        <div class="v-main__wrapper">
            <div class="v-main__side-main side-main">
                <header class="side-main__header-main header-main">
                    <div class="header-main__logo">
                        Need for drive
                    </div>
                    <div class="header-main__city city">
                        <div class="city__icon">
                            <svg viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="city__text">
                            Ульяновск
                        </div>
                    </div>
                </header>
                <div class="side-main__content">
                    <h1 class="side-main__title">
                        Каршеринг
                        <span>
                            Need for drive
                        </span>

                    </h1>
                    <div class="side-main__subtitle">
                        Поминутная аренда авто твоего города
                    </div>
                    <v-button class="v-button_size_xxl"/>
                </div>

            </div>
            <div class="v-main__slider-main slider-main">
                <slider class="slider-main__slider"/>
            </div>
        </div>
    </div>
</template>

<script>
    import vButton from "../buttons/v-button";
    import slider from "../slider/slider";
    export default {
        name: "v-main",
        components: {
            vButton,
            slider,
        },
        props: {},
        data() {
            return {
                title: '',
                slides: [
                    {
                        title: "",
                        subtitle: "",
                    }
                ]
            }
        },
    }


</script>

<style scoped>

</style>