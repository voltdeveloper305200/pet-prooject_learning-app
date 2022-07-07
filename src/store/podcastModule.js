export const podcastModule = {
    state: () => ({
        isLoading: false,
        podcasts: [],
    }),
    mutations: {
        setLoading: (state, bool) => {
            state.isLoading = bool;
        },
        setPodcasts: (state, podcasts) => {
            state.podcasts = podcasts;
        },
    },
    actions: {
        async fetchPodcasts({commit}) {
            try {
                commit('setLoading', true)
                const response = await axios.get('http://localhost:8001/podcasts')
                commit('setPodcasts', response.data)
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false)
            }
        },
    },
    namespaced: true
}