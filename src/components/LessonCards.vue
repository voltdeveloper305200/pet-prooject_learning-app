<template>
    <div class="leassons-cards__wrapper row" v-if="cards.length">
        <div
            class="col-lg-4 col-md-6 col-sm-6"
            v-for="card in cards"
            v-bind:key="card.id"
        >
            <div
                class="lesson-card"
                :style="`background: url(${require('../assets/lesson-card-bg.png')}) center center no-repeat;background-size: cover;`"
            >
                <div class="lesson-card__body">
                    <div class="lesson-card-body__top">
                        <button
                            @click="$router.push(`/lessons/${card.id}`)"
                            class="main-btn card-btn"
                        >
                            Открыть
                        </button>
                        <span class="main-btn card-btn"
                            >{{ card.time }} мин</span
                        >
                    </div>
                    <div class="center-wrapper d-flex justify-content-center">
                        <div class="lesson-card-body__title">
                            <h6>{{ card.title }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h1 v-else>К сожалению уроков пока нет</h1>
</template>

<script>
export default {
    props: {
        cards: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style></style>
