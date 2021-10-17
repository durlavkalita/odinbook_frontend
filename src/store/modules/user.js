import axios from 'axios'
// import VueJwtDecode from 'vue-jwt-decode'

// const base_url = process.env.API_URL || 'http://localhost:3000/api';

const state = {
    token: '',
    user: {},
    userPosts: [],
    usersList: []
}

const getters = {
    token: (state) => state.token,
    user: (state) => state.user,
    userPosts: (state) => state.userPosts,
    usersList: (state) => state.usersList
}

const actions = {
    // async fetchToken({commit}) {
    //     const token = localStorage.getItem("odinbook_token");
    //     if(!token){
    //         try {
    //             let response = await axios.post('http://localhost:3000/api/login', {email: this.email, password: this.password});
    //             let token = response.data.token;
    //             localStorage.setItem('odinbook_token', token);
    //             commit('SET_TOKEN', token);
    //             console.log(token);
    //         } catch (error) {
    //             console.log(error.response);
    //         }
    //     }else {
    //         // console.log(token);
    //         commit('SET_TOKEN', token);
    //     }
    // },

    async fetchUser({commit}, userid) {
        const token = localStorage.getItem('odinbook_token')
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.get(`http://localhost:3000/users/${userid}`, {headers: headers});
        commit('SET_USER', res.data.user);
    },

    async fetchUserPosts({commit}, userid) {
        const token = localStorage.getItem('odinbook_token')
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        
        const res2 = await axios.get(`http://localhost:3000/users/${userid}/posts`, {headers: headers});
        commit('SET_USER_POSTS', res2.data);
    },

    async fetchUsersList({commit}) {
        const res = await axios.get(`http://localhost:3000/users`);
        // console.log(res.data.users);
        commit('SET_USERS_LIST', res.data.users);
    }
}

const mutations = {
    // SET_TOKEN: (state, token) => {state.token = token},
    SET_USER: (state, user) => {state.user = user},
    SET_USER_POSTS: (state, userPosts) => {state.userPosts = userPosts},
    SET_USERS_LIST: (state, usersList) => {state.usersList = usersList}
}

export default {
    state,
    getters,
    actions,
    mutations
  }