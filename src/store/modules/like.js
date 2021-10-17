import axios from 'axios'

const base_url = process.env.API_URL || 'http://localhost:3000/api';

const state = {
}

const getters = {
}

const actions = {
    async createLike(context, postid) {
        const token = localStorage.getItem('odinbook_token')
        const user = localStorage.getItem('odinbook_user')
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.post(`${base_url}/posts/${postid}/like`, {author: user}, {headers: headers});
        console.log(res.data, res.status);
        return res.status;
    }
}

const mutations = {
}

export default {
    state,
    getters,
    actions,
    mutations
  }