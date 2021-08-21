import axios from 'axios'

const base_url = process.env.BASE_URL;

const state = {
    comments: []
}

const getters = {
    comments: (state) => state.comments
}

const actions = {
    async fetchComments({commit}, id) {
        const res = await axios.get(`${base_url}/post/${id}/comments`);
        commit('SET_COMMENTS', res.data);
    }
}

const mutations = {
    SET_COMMENTS: (state, comments) => {state.comments = comments}
}

export default {
    state,
    getters,
    actions,
    mutations
  }