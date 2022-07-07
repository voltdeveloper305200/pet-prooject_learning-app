import Vue from "vue";
import Vuex from 'vuex'
import { lessonModule } from "./lessonModule";
import { podcastModule } from "./podcastModule";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: 'Никита'
        }
    },
    getters: {
        firstLetterName: state => {
            return state.user.name.split('')[0];
        }
    },
    modules: { 
       lesson: lessonModule,
       podcast: podcastModule, 
    }
})