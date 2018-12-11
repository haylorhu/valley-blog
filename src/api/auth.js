import HTTP from '../util/request'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth',
  
}

class AuthModel extends HTTP{
  constructor(){
    super()
  }
  AuthRegister(data){
    let options = {
      url:URL.REGISTER,
      type:"POST",
      data:data,
    }
    return this.request(options)
  }
  AuthLogin(data){
    let options = {
      url:URL.LOGIN,
      type:"POST",
      data:data,
    }
    return this.request(options)
  }
  getInfo(){
    let options = {
      url:'/auth',
      type:"GET",
    }
    return this.request(options)
  }
  LogOut(){
    let options = {
      url:'/auth/logout',
      type:"GET",
    }
    return this.request(options)
  }


}
export  {AuthModel}
