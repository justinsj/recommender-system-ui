import { SECRETS } from './../secrets/secrets';

export class LogAPI {
  static instance;
  constructor(){

  }

  static async put(data){
    console.log({productId:data.productId, action:data.action})

    return new Promise(async (resolve, reject)=>{

      let requestOptions = {
        method: 'POST',
        body: data,
      };

      //(
        // fetch(
        //   SECRETS.logUrl,
        //   requestOptions
        // )
        // .then(resp => resolve(resp))
        // .catch(err => reject(err))
      //)
    })
    
  }
}