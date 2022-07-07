import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue"
import LessonsPage from "../pages/LessonsPage.vue"
import LessonDetailsPage from "../pages/LessonDetailsPage.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home-page'
    },
    {
        path: '/lessons', 
        component: LessonsPage,
        name: 'lessons-page'
    },
    {
        path: '/lessons/:id', 
        component: LessonDetailsPage,
        name: 'lesson-detail'
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;