import axios from 'axios'

const base_url = process.env.API_URL || 'http://localhost:3000/api';

const state = {
    posts: [],
}

const getters = {
    posts: (state) => state.posts,
}

const actions = {
    async createPost(context, data) {
        let token = localStorage.getItem('odinbook_token');
        let user = localStorage.getItem('odinbook_user');
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.post(`${base_url}/posts`, {content: data, author: user }, {headers: headers});
        console.log(res.data);
        // refresh page after submit
    },

    async fetchPosts({commit}) {
        const token = localStorage.getItem('odinbook_token')
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const user = localStorage.getItem('odinbook_user');
        const res = await axios.get(`${base_url}/posts/${user}/feed`, {headers: headers});
        // console.log(res.data);
        commit('SET_POSTS', res.data);
    },
}

const mutations = {
    SET_POSTS: (state, posts) => {state.posts = posts},
}

export default {
    state,
    getters,
    actions,
    mutations
}