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
        async fetchLessons({state, commit}) {
            try {
              commit('setLoading', true)
              const response = await axios.get('http://localhost:8001/lessons', {
                params: {
                    _limit: state.limit,
                    _page: state.page
                }
              })
              const response2 = await axios.get('http://localhost:8001/lessons')
              commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
              commit('setLessons', response.data)
              commit('setLessonsAll', response2.data)
            } catch (e) {
              console.log(e);
            } finally {
              commit('setLoading', false)
            }
        },
        changePage({commit, dispatch}, pageNumber) {
            commit('setPage', pageNumber)
            dispatch('fetchLessons')
        },
        changeNextPage({state, commit, dispatch}) {
            const newState = state.page < state.totalPages ? state.page += 1 : state.page = 1
            commit('setPage', newState)
            dispatch('fetchLessons')
        },
        changePrevPage({state, commit, dispatch}) {
            const newState = state.page > 1 ? state.page -= 1 : state.page = state.totalPages
            commit('setPage', newState)
            dispatch('fetchLessons')
        },
        selectLesson({state, commit}, id) {
            commit('setSelectedLesson', state.lessonsAll.find(lesson => lesson.id === id) || null)
        }
    },
    getters: {
        searchedLessons(state) {
            return state.lessons.filter((lesson) => lesson.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
        missedLessons(state) {
            return state.lessons.filter((lesson) => lesson.isCompleted === false)
        },
        searchedMissedLessons(state, getters) {
            return getters.missedLessons.filter((lesson) => lesson.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
    },
    namespaced: true
}