export const lessonModule = {
    state: () => ({
        lessons: [],
        lessonsAll: [],
        selectedLesson: null,
        isLoading: false,
        searchQuery: '',
        page: 1,
        limit: 9,
        totalPages: 0
    }),
    mutations: {
        setLessons: (state, lessons) => {
            state.lessons = lessons;
        },
        setLessonsAll: (state, lessonsAll) => {
            state.lessonsAll = lessonsAll;
        },
        setLoading: (state, bool) => {
            state.isLoading = bool;
        },
        setSearchQuery: (state, searchQuery) => {
            state.searchQuery = searchQuery;
        },
        setPage: (state, page) => {
            state.page = page
        },
        setTotalPages: (state, totalPages) => {
            state.totalPages = totalPages
        },
        setSelectedLesson: (state, selectedLesson) => {
            state.selectedLesson = selectedLesson
        }
    },
    actions: {
        async fetchLessonsLimited({state, commit}) {
            try {
              commit('setLoading', true)
              const response = await axios.get('http://localhost:8001/lessons', {
                params: {
                    _limit: state.limit,
                    _page: state.page
                }
              })
              commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
              commit('setLessons', response.data)
            } catch (e) {
              console.log(e);
            } finally {
              commit('setLoading', false)
            }
        },
        async fetchLessonsAll({commit}) {
            try {
                commit('setLoading', true)
                const response = await axios.get('http://localhost:8001/lessons')
                commit('setLessonsAll', response.data)
              } catch (e) {
                console.log(e);
              } finally {
                commit('setLoading', false)
              }
        },
        changePage({commit, dispatch}, pageNumber) {
            commit('setPage', pageNumber)
            dispatch('fetchLessonsLimited')
        },
        changeNextPage({state, commit, dispatch}) {
            const newState = state.page < state.totalPages ? state.page += 1 : state.page = 1
            commit('setPage', newState)
            dispatch('fetchLessonsLimited')
        },
        changePrevPage({state, commit, dispatch}) {
            const newState = state.page > 1 ? state.page -= 1 : state.page = state.totalPages
            commit('setPage', newState)
            dispatch('fetchLessonsLimited')
        },
        selectLesson({state, commit}, id) {
            commit('setSelectedLesson', state.lessonsAll.find(lesson => lesson.id === id) || null)
        },
     },
    getters: {
        searchedLessons(state) {
            return state.lessons.filter((lesson) => lesson.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
        missedLessons(state) {
            return state.lessonsAll.filter((lesson) => lesson.isCompleted === false)
        },
        searchedMissedLessons(state, getters) {
            return getters.missedLessons.filter((lesson) => lesson.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
    },
    namespaced: true
}