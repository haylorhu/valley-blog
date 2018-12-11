import {AuthModel} from "@/api/auth.js"

const auth = new AuthModel()

const state = {
  user:null,
  isLogin:false
}

const getters ={
  user:state => state.user,
  isLogin:state => state.isLogin
}

const mutations = {
  setUser(state,payload){
    state.user = payload.user
  },
  setLogin(state,payload){
    state.isLogin = payload.isLogin
  }
}

const actions ={
  login({commit},{username,password}){
    return auth.AuthLogin({username,password})
    .then(res=>{
      console.log('====================================');
      console.log(res.data.user);
      console.log('====================================');
      commit('setUser',{user:res.data})
      commit('setLogin',{isLogin:true})
    })
  },
  async register({commit},{username,password}){
    let res = auth.AuthRegister({username,password})
    commit('setUser',{user:res.data})
    commit('setLogin',{isLogin:true})
    return res.data
  },
  async logout({commit}){
    await auth.LogOut()
    commit('setUser',{user:null})
    commit('setLogin',{user:false})

  },
  async checkLogin({commit,state}){
    if(state.isLogin)return true
    let res = await auth.getInfo()
    commit('setLogin',{isLogin:res.isLogin})
    if(!res.isLogin) return false
    commit('setUser',{user:res.data})
    return true
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
