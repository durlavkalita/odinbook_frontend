import axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'

// const base_url = process.env.API_URL;

const state = {
    token: '',
    user: {},
    users: []
}

const getters = {
    token: (state) => state.token,
    user: (state) => state.user,
    users: (state) => state.users
}

const actions = {
    async fetchToken({commit}) {
        const token = localStorage.getItem("odinbook_token");
        if(!token){
            try {
                let response = await axios.post('http://localhost:3000/api/login', {email: this.email, password: this.password});
                let token = response.data.token;
                localStorage.setItem('odinbook_token', token);
                commit('SET_TOKEN', token);
                // console.log(token);
            } catch (error) {
                console.log(error.response);
            }
        }else {
            // console.log(token);
            commit('SET_TOKEN', token);
        }
    },

    async fetchUser({commit}) {
        const token = localStorage.getItem("odinbook_token");
        try {
            //decode token here and attach to the user object
            let decoded = VueJwtDecode.decode(token); 
            // console.log(decoded);  
            commit('SET_USER', decoded.user);
            } catch (error) {
              // return error in production env
              console.log(error, 'error from decoding token')
        }
    }
}

const mutations = {
    SET_TOKEN: (state, token) => {state.token = token},
    SET_USER: (state, user) => {state.user = user}
}

export default {
    state,
    getters,
    actions,
    mutations
  }