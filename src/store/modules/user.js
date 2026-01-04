import {getToken, setToken} from "@/utils/tokenUtil";

const user = {
  state: {
    // 用户认证token
    token: getToken() || '',
    //用户信息
    userInfo: uni.getStorageSync('userInfo') || null,
  },
  mutations: {
    //用户登录后触发存储用户信息
    SET_USER_INFO(state, obj) {
      uni.setStorageSync('userInfo', obj)
      state.userInfo = obj;
    },
    SET_TOKEN: (state, value) => {
      setToken(value)
      //uni.setStorageSync('token', value)
      state.token = value
    },
  },
  getters: {},
  actions: {
    //用户登录后触发次方法存储用户信息
    setUserInfo({ commit}, obj) {
      commit('SET_USER_INFO', obj);
    },
    setToken({ commit}, val) {
      commit('SET_TOKEN', val);
    }
  }
}

export default user