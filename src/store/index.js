import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'

const store = createStore({
  state: state,
  mutations: mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})


export default store
