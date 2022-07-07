<template>
    <div class="sidebar-content__menu">
        <ul>
            <li class="menu__item">
                <img src="../assets/menu-home.svg" alt="" />
                <router-link class="menu__link active" to="/"
                    >Главная</router-link
                >
            </li>
            <li class="menu__item">
                <img src="../assets/menu-lessons.svg" alt="" />
                <router-link class="menu__link active" to="/lessons"
                    >Уроки</router-link
                >
            </li>
            <li class="menu__item">
                <img src="../assets/menu-messages.svg" alt="" />
                <a class="menu__link" href="">Сообщения</a>
            </li>
            <li class="menu__item">
                <img src="../assets/menu-settings.svg" alt="" />
                <a class="menu__link" href="">Настройки</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
