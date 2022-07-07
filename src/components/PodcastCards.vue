<template>
    <div class="content-podcasts__cards">
        <div
            class="content-podcasts__card"
            v-for="card in cards"
            :key="card.id"
            :style="`background: url(${require('../assets/podcast-card-bg.png')}) center center no-repeat;background-size: cover;`"
        >
            <div class="avatar-block">
                <img :src="`${card.avatar}`" alt="" v-if="card.avatar" />
            </div>
        </div>
        <button class="square-btn nextSlide-btn">
            <img src="../assets/arrow-right-icon.svg" alt="" />
        </button>
    </div>
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
