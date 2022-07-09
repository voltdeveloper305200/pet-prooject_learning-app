<template>
  <div class="container-fluid">
    <div class="content-top">
      <Search :search="searchQuery" @input="setSearchQuery"></Search>
      <AccountButtons></AccountButtons>
    </div>
    <div class="content-lesson-details">
      <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12">
          <div class="title-block">
            <h4>{{ title }}</h4>
          </div>
          <div class="details-content">
            <div class="details-content__video">
              <div class="video-block"></div>
            </div>
            <div class="details-content__info">
              <div class="author-avatar">
                <div class="avatar-block">
                  <img src="../assets/avatar.png" alt="" />
                </div>
              </div>
              <div class="lesson-info">
                <h5>{{ title }}</h5>
                <div class="lesson-info__bottom">
                  <h6 class="author-name">@dianneed</h6>
                  <div class="lesson-feedback">
                    <div class="lesson-feedback__likes">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3 10.08C21.019 9.74265 20.6674 9.47108 20.27 9.28447C19.8726 9.09786 19.439 9.00075 19 9H14.44L15 7.57C15.2329 6.94388 15.3105 6.2706 15.2261 5.60792C15.1416 4.94524 14.8977 4.31293 14.5152 3.76523C14.1327 3.21753 13.623 2.7708 13.0299 2.46334C12.4369 2.15589 11.778 1.99689 11.11 2C10.9176 2.0004 10.7295 2.05627 10.5681 2.16092C10.4067 2.26557 10.2789 2.41455 10.2 2.59L7.35 9H5C4.20435 9 3.44129 9.31607 2.87868 9.87868C2.31607 10.4413 2 11.2043 2 12V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H17.73C18.4318 21.9998 19.1113 21.7535 19.6503 21.304C20.1893 20.8546 20.5537 20.2303 20.68 19.54L21.95 12.54C22.0286 12.1074 22.011 11.6628 21.8987 11.2377C21.7864 10.8126 21.582 10.4174 21.3 10.08ZM7 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H7V20ZM20 12.18L18.73 19.18C18.6874 19.413 18.5635 19.6232 18.3804 19.7734C18.1973 19.9236 17.9668 20.0039 17.73 20H9V10.21L11.72 4.09C12 4.17162 12.26 4.31041 12.4837 4.49758C12.7073 4.68476 12.8897 4.91627 13.0194 5.17749C13.1491 5.43872 13.2232 5.72399 13.2371 6.0153C13.2509 6.30661 13.2043 6.59763 13.1 6.87L12.57 8.3C12.4571 8.60225 12.4189 8.92735 12.4589 9.24753C12.4988 9.56771 12.6156 9.87348 12.7993 10.1387C12.983 10.404 13.2282 10.6209 13.5139 10.7708C13.7996 10.9208 14.1173 10.9994 14.44 11H19C19.1469 10.9998 19.2921 11.0319 19.4252 11.0941C19.5582 11.1563 19.676 11.2471 19.77 11.36C19.8663 11.4713 19.9369 11.6025 19.9767 11.7443C20.0164 11.886 20.0244 12.0348 20 12.18Z"
                        />
                      </svg>
                      <span>10</span>
                    </div>
                    <div class="lesson-feedback__dislikes">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 2H6.26998C5.56817 2.00023 4.88865 2.24651 4.34966 2.69598C3.81066 3.14544 3.4463 3.76965 3.31998 4.46L2.04998 11.46C1.97085 11.8924 1.98772 12.337 2.09941 12.7622C2.2111 13.1874 2.41488 13.5828 2.69631 13.9206C2.97775 14.2583 3.32997 14.53 3.72806 14.7166C4.12614 14.9031 4.56036 14.9999 4.99998 15H9.55998L8.99998 16.43C8.76704 17.0561 8.68947 17.7294 8.77391 18.3921C8.85835 19.0548 9.10229 19.6871 9.48479 20.2348C9.86729 20.7825 10.3769 21.2292 10.97 21.5367C11.5631 21.8441 12.2219 22.0031 12.89 22C13.0823 21.9996 13.2705 21.9437 13.4319 21.8391C13.5933 21.7344 13.7211 21.5854 13.8 21.41L16.65 15H19C19.7956 15 20.5587 14.6839 21.1213 14.1213C21.6839 13.5587 22 12.7956 22 12V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM15 13.79L12.28 19.91C12.0017 19.8258 11.7435 19.6855 11.5215 19.4978C11.2995 19.31 11.1182 19.0788 10.989 18.8183C10.8597 18.5579 10.7851 18.2737 10.7698 17.9834C10.7545 17.693 10.7988 17.4026 10.9 17.13L11.43 15.7C11.5429 15.3977 11.581 15.0727 11.5411 14.7525C11.5012 14.4323 11.3844 14.1265 11.2006 13.8613C11.0169 13.596 10.7718 13.3791 10.4861 13.2292C10.2004 13.0792 9.88264 13.0006 9.55998 13H4.99998C4.85307 13.0002 4.70791 12.9681 4.57482 12.9059C4.44174 12.8437 4.324 12.7529 4.22998 12.64C4.13364 12.5287 4.06308 12.3975 4.02332 12.2557C3.98356 12.114 3.97559 11.9652 3.99998 11.82L5.26998 4.82C5.31257 4.58704 5.43646 4.37676 5.61959 4.2266C5.80271 4.07644 6.03319 3.99614 6.26998 4H15V13.79ZM20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5195 12.8946 19.2652 13 19 13H17V4H19C19.2652 4 19.5195 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V12Z"
                        />
                      </svg>

                      <span>10</span>
                    </div>
                    <div class="lesson-feedback__dislikes"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="details-content__description">
              <p>
                In this lesson, you use navigation controllers and segues to create the navigation
                flow of the FoodTracker app. At the end of the lesson, you’ll have a complete
                navigation scheme and interaction flow for the app.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="title-block">
            <h4>Уроки</h4>
            <a href=""><img src="../assets/dots-icon.svg" alt="" /></a>
          </div>
          <div class="lessons-list">
            <div
              class="lesson-item d-flex align-items-center"
              v-for="lesson in lessonsAll"
              :key="lesson.id"
            >
              <button class="square-btn user-btn">
                {{ lesson.id }}
              </button>
              <div class="lesson-item__description">
                <a>{{ lesson.title }}</a>
                <p>{{ lesson.title }} | {{ lesson.time }} мин</p>
                <hr />
              </div>
            </div>
          </div>
          <div class="details-btn mt-5">
            <button :disabled="disabled" @click="get(selectedLesson.id, selectedLesson)">
              <span v-if="isCompleted">&#10004; Урок пройден</span>
              <span v-else-if="waiting">Пару секунд...</span>
              <span v-else-if="!isCompleted">Завершить урок</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue';
import AccountButtons from '../components/AccountButtons.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'LessonDetailPage',
  components: {
    Search,
    AccountButtons,
  },
  data() {
    return {
      title: null,
      isCompleted: null,
      waiting: false,
      disabled: false,
    };
  },
  methods: {
    ...mapActions({
      selectLesson: 'lesson/selectLesson',
      fetchLessonsAll: 'lesson/fetchLessonsAll',
      makeCompleteLesson: 'lesson/makeCompleteLesson',
    }),
    ...mapMutations({
      setSearchQuery: 'lesson/setSearchQuery',
    }),
    getLessonDetailsData() {
      if (this.$route.params.id) {
        this.selectLesson(this.$route.params.id);
        this.title = this.selectedLesson.title;
        if (!this.selectedLesson) {
          this.$router.back();
        }
      }
    },
    async get(id, lesson) {
      if (this.selectedLesson.isCompleted === false) {
        this.waiting = true;
        this.disabled = true;
        await axios.put(`http://localhost:8001/lessons/${id}`, {
          ...lesson,
          isCompleted: true,
        });
        this.waiting = false;
        this.disabled = false;
        this.selectedLesson.isCompleted = true;
      }
    },
  },
  computed: {
    ...mapState({
      lessonsAll: (state) => state.lesson.lessonsAll,
      searchQuery: (state) => state.lesson.searchQuery,
      selectedLesson: (state) => state.lesson.selectedLesson,
    }),
  },
  updated() {
    this.$nextTick(function () {
      this.getLessonDetailsData();
      this.isCompleted = this.selectedLesson.isCompleted;
    });
  },
  mounted() {
    this.fetchLessonsAll();
  },
};
</script>

<style>
.details-btn button {
  width: 100%;
  height: 50px;
  background-color: #503e9d;
  border: none;
  border-radius: 20px;
  color: #ffff;
}

.details-btn button:disabled {
  opacity: 0.5;
}
</style>
