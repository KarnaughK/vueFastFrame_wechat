import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

Vue.use(Vuex);

// 定义一个容器
const state = {};

let store = new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {
    user
  }
});

export default store;
