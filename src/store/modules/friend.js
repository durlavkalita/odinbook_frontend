import axios from 'axios'

const base_url = process.env.API_URL || 'http://localhost:3000/api';

const state = {
  frindsList: []
}

const getters = {
  friendRequestList: (state) => state.friendsList,
}

const actions = {
    async fetchFriendRequestList({commit}) {
        const token = localStorage.getItem('odinbook_token')
        const user = localStorage.getItem('odinbook_user')
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.get(`${base_url}/friends/${user}`, {headers: headers});
        // console.log(res.data, res.status);
        commit('SET_FRIEND_REQUEST_LIST', res.data);
    }
}

const mutations = {
  SET_FRIEND_REQUEST_LIST: (state, friendRequestList) => {state.friendsList = friendRequestList},
}

export default {
    state,
    getters,
    actions,
    mutations
  }