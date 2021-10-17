import axios from 'axios'

const base_url = process.env.API_URL || 'http://localhost:3000/api';

const state = {
    comments: []
}

const getters = {
    comments: (state) => state.comments
}

const actions = {
    async fetchComments({commit}, id) {
        const token = localStorage.getItem('odinbook_token');
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.get(`${base_url}/posts/${id}/comments`, {headers: headers})
        console.log(res.data);
        commit('SET_COMMENTS', res.data.comments);
    },

    async createComment(context, data) {
        const token = localStorage.getItem('odinbook_token')
        const user = localStorage.getItem('odinbook_user')
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.post(`http://localhost:3000/api/posts/${data.postid}/comments`, {content: data.data.content, author: user}, {headers: headers});
        console.log(res.data);
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