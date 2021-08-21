import axios from 'axios'

const base_url = process.env.API_URL || 'http://localhost:3000/api';

const state = {
    posts: [],
    userPosts: [],
    postComments: [],
}

const getters = {
    posts: (state) => state.posts,
    userPosts: (state) => state.userPosts,
    postComments: (state) => state.postComments
}

const actions = {
    async createPost(context, data) {
        let token = context.rootGetters.token;
        let user = context.rootGetters.user;
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.post(`http://localhost:3000/api/posts`, {content: data, author: user }, {headers: headers});
        console.log(res.data);
    },

    async fetchPosts({rootGetters, commit}) {
        const headers = {
            'Authorization': 'Bearer ' + rootGetters.token
        }
        const res = await axios.get(`http://localhost:3000/api/posts`, {headers: headers});
        commit('SET_POSTS', res.data);
    },

    async fetchUserPosts({commit}, id) {
        const res = await axios.get(`${base_url}/user/${id}/posts`);
        commit('SET_USER_POSTS', res.data);
    },

    async fetchComments({rootGetters, commit}, id) {
        const headers = {
            'Authorization': 'Bearer ' + rootGetters.token
        }
        const res = await axios.get(`http://localhost:3000/api/posts/${id}/comments`, {headers: headers})
        console.log(res.data);
        commit('SET_POST_COMMENTS', res.data.comments);
    },

    async createComment({rootGetters}, {postid, data}) {
        let user = rootGetters.user._id;
        // const headers = {
        //     'Authorization': 'Bearer ' + rootGetters.token
        // }
        console.log(postid,data, user);
        // const res = await axios.post(`http://localhost:3000/api/posts/${postid}/comments`, {content: data, author: user, post: postid}, {headers: headers});
        // console.log(res.data);
    }
}

const mutations = {
    SET_POSTS: (state, posts) => {state.posts = posts},
    SET_USER_POSTS: (state, userPosts) => {state.userPosts = userPosts},
    SET_POST_COMMENTS: (state, postComments) => {state.postComments = postComments}
}

export default {
    state,
    getters,
    actions,
    mutations
}