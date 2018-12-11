import axios from 'axios';
import { Toast } from 'mint-ui';
// axios.defaults.headers.post['Content-Type'] =



class HTTP{
  constructor(){

  }
 request ({ url,type="GET",data={}}){

  return new Promise((resolve,reject)=>{
    let option = {
      baseURL:'http://blog-server.hunger-valley.com',
      url:url,
      method:type,

      withCredentials: true, // 默认的


    }

    if(type.toLowerCase() === 'get'){
      option.params = data
    }else{
      option.data=data
    }
    axios(option).then(res=>{
      console.log(res);

      if(res.data.status ==="ok"){
        if(res.data.msg){
          Toast({
            message: res.data.msg,
            position: 'top',
            duration: 2000
          });
        }

        resolve(res.data)
      }
      else{

        reject(res.data.msg)

          Toast({
            message: res.data.msg,
            position: 'top',
            duration: 2000
          });


      }
    })
  })
 }

}
export default HTTP
