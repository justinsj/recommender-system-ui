
import { SECRETS } from './../secrets/secrets';

export class LogAPI {
  static instance;

  constructor() {

  }

  static async put(data) {
    // console.log({productId: data.productId, action: data.action})

    return new Promise(async (resolve, reject) => {

      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      url = SECRETS.logUrl;
      fetch(
        SECRETS.logUrl,
        requestOptions,
      ).then(resp => {
        console.log(resp)
        resolve(resp)}
      ).catch(err => {
        console.err(err)
        reject(err)
      })
      
    })

  }
}