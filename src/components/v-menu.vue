<template>
    <div class="v-menu" >
        <div class="v-menu__burger burger " @click="openMenu">
            <transition name="fade">
                <div class="burger__open" v-if="!menu">
                    <svg class="burger__icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="burger__line"  d="M4 8H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="burger__line"  d="M4 16H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="burger__line" d="M4 24H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </transition>
            <transition name="fade">
                <div class="burger__close" v-if="menu">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 8L8 24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 8L24 24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </transition>

        </div>
        <div class="v-menu__nav nav"
             :class="{'open': menu}"
        >
            <ul class="nav__list">
                <li class="nav__item"
                        v-for="(item, index) in items"
                        :key="index"
                >
                    <a href="#">{{item.name}}</a>

                </li>
            </ul>
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
        name: "v-menu",
        data() {
            return {
                items: [
                    {name:"ПАРКОВКА"},
                    {name:"СТРАХОВКА"},
                    {name:"БЕНЗИН"},
                    {name:"ОБСЛУЖИВАНИЕ"},
                ],
                menu: false,
            }
        },
        methods: {
            openMenu() {
                this.menu = !this.menu
            }
        }
    }
</script>

<style scoped>

</style>