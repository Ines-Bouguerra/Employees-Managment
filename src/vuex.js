import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

const state = {
  currentUser: null,
};

const store = new vuex.Store({
  state,
  getters: {
    currentUser: (state) => {
      return state.currentUser;
    },
  },
  actions: {
    currentUser(context, currentUser) {
      context.commit("currentUser", currentUser);
    },
  },
  mutations: {
    currentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
  },
});

export default store;
