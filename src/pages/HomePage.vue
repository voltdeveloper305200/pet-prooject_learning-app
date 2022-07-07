<template>
    <div class="container-fluid">
        <div class="content-top">
            <Search :search="searchQuery" @input="setSearchQuery"></Search>
            <AccountButtons></AccountButtons>
        </div>
        <div class="content-lessons">
            <div class="title-block">
                <h4>Непройденные уроки</h4>
                <a href=""><img src="../assets/dots-icon.svg" alt="" /></a>
            </div>
            <div class="content-lessons__cards">
                <LessonCardsVue
                    :cards="this.searchedMissedLessons"
                    v-if="!this.isLoading"
                ></LessonCardsVue>
                <Spinner v-else></Spinner>
            </div>
        </div>
        <div class="content-podcasts">
            <div class="title-block">
                <h4>Может быть интересно</h4>
                <a href=""><img src="../assets/dots-icon.svg" alt="" /></a>
            </div>
            <PodcastCardsVue
                :cards="this.podcasts"
                v-if="!this.isLoading"
            ></PodcastCardsVue>
            <Spinner v-else></Spinner>
        </div>
    </div>
</template>

<script>
import LessonCardsVue from "../components/LessonCards.vue";
import PodcastCardsVue from "../components/PodcastCards.vue";
import Search from "../components/Search.vue";
import Spinner from "../components/UI/Spinner.vue";
import AccountButtons from "../components/AccountButtons.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: {
        LessonCardsVue,
        PodcastCardsVue,
        Spinner,
        AccountButtons,
        Search,
    },
    methods: {
        ...mapMutations({
            setSearchQuery: "lesson/setSearchQuery",
        }),
        ...mapActions({
            fetchLessons: "lesson/fetchLessons",
            fetchPodcasts: "podcast/fetchPodcasts",
        }),
    },
    computed: {
        ...mapState({
            lessons: (state) => state.lesson.lessons,
            isLoading: (state) => state.podcast.isLoading,
            searchQuery: (state) => state.lesson.searchQuery,
            podcasts: (state) => state.podcast.podcasts,
        }),
        ...mapGetters({
            searchedLessons: "lesson/searchedLessons",
            searchedMissedLessons: "lesson/searchedMissedLessons",
            missedLessons: "lesson/missedLessons",
        }),
    },
    mounted() {
        this.fetchLessons(), this.fetchPodcasts();
    },
};
</script>
