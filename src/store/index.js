import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'

import getters from './getters'
//vue的插件机制
Vue.use(Vuex);

//Vuex.Store 构造器选项
const store = new Vuex.Store({
    modules: {
        user
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters
})

export default store