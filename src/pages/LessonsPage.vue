<template>
  <div class="container-fluid">
    <div class="content-top">
      <Search :search="searchQuery" @input="setSearchQuery"></Search>
      <AccountButtons></AccountButtons>
    </div>
    <div class="content-lessons">
      <div class="title-block">
        <h4>Уроки</h4>
        <a href=""><img src="../assets/dots-icon.svg" alt="" /></a>
      </div>
      <div class="content-lessons__cards">
        <LessonCardsVue :cards="this.searchedLessons" v-if="!this.isLoading"></LessonCardsVue>
        <Spinner v-else></Spinner>
        <Pagination
          :page="this.page"
          :totalPages="this.totalPages"
          :changePage="this.changePage"
          :nextPage="this.changeNextPage"
          :prevPage="this.changePrevPage"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import LessonCardsVue from '../components/LessonCards.vue';
import Spinner from '../components/UI/Spinner.vue';
import Search from '../components/Search.vue';
import Pagination from '../components/Pagination.vue';
import AccountButtons from '../components/AccountButtons.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    LessonCardsVue,
    Spinner,
    Search,
    Pagination,
    AccountButtons,
  },

  methods: {
    ...mapMutations({
      setSearchQuery: 'lesson/setSearchQuery',
    }),
    ...mapActions({
      fetchLessonsLimited: 'lesson/fetchLessonsLimited',
      changePage: 'lesson/changePage',
      changeNextPage: 'lesson/changeNextPage',
      changePrevPage: 'lesson/changePrevPage',
    }),
  },
  computed: {
    ...mapState({
      lessons: (state) => state.lesson.lessons,
      isLoading: (state) => state.lesson.isLoading,
      searchQuery: (state) => state.lesson.searchQuery,
      podcastCards: (state) => state.lesson.podcastCards,
      page: (state) => state.lesson.page,
      limit: (state) => state.lesson.limit,
      totalPages: (state) => state.lesson.totalPages,
    }),
    ...mapGetters({
      searchedLessons: 'lesson/searchedLessons',
    }),
  },
  mounted() {
    this.fetchLessonsLimited();
  },
};
</script>
