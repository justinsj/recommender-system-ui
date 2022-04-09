
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
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const url = SECRETS.logUrl;
      fetch(
        url,
        requestOptions,
      ).then(resp => {
        // console.log(resp)
        resolve(resp)}
      ).catch(err => {
        console.error(err)
        reject(err)
      })
      
    })

  }
}