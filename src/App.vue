<template>
    <section class="main">
        <div
            class="sidebar"
            :class="{
                active: isOpenSidebar,
            }"
            @mouseover="openSidebar"
            @mouseout="closeSidebar"
        >
            <div class="sidebar-content">
                <div class="sidebar-content__user">
                    <div class="user__avatar">
                        <span>{{ this.$store.getters.firstLetterName }}</span>
                    </div>
                    <h3 class="user__name">
                        {{ this.$store.state.user.name }}
                    </h3>
                </div>
                <Menu></Menu>
                <div class="sidebar-content__banner">
                    <div class="banner-content">
                        <img src="./assets/support-icon.svg" alt="" />
                        <h5>Помощь 24/7</h5>
                        <p>Contacts us anytime</p>
                        <button class="main-btn">Написать</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-app">
            <div class="container">
                <div class="app-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
    name: "App",
    components: {
        Menu,
    },
    data() {
        return {
            isOpenSidebar: false,
        };
    },
    methods: {
        openSidebar() {
            this.isOpenSidebar = true;
        },
        closeSidebar() {
            this.isOpenSidebar = false;
        },
    },
};
</script>
