import { createStore } from 'vuex'
import user from './modules/user'
import post from './modules/post'
import comment from './modules/comment'
import like from './modules/like'
import friend from './modules/friend'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    post,
    comment,
    like,
    friend
  }
})
