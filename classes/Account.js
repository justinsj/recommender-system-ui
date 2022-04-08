/**
 * Account is responsible for holding anonymized user data
 */
import {Memento} from "../classes/Memento";
import {createId} from "../helpers/data.helpers";

// TODO support Observer pattern if needed
export class Account extends Memento {
  constructor() {
    super();
    this.state = {}
    this.onLoadFinished = this.onLoadFinished.bind(this);
    this.load();
  }

  static getInstance() {
    return new Promise(async (resolve, reject) => {
      if (!Account.instance) {
        Account.instance = new Account();
        await Account.instance.load(Account.instance.onLoadFinished);
      }
      resolve(Account.instance);
    })

  }

  setUTM(params, callback = () => {
  }) {
    this.setState(params, callback);
  }

  getUTM() {
    const {utm_source, utm_medium, utm_campaign} = this.state;
    return {
      utm_source,
      utm_medium,
      utm_campaign
    }
  }

  onLoadFinished() {

    const {utm_source, utm_medium, utm_campaign} = this.getUTM();

  }

  getName() {
    return "Account";
  }

  getPrimaryColor() {
    return this.state.primaryColor;
  }

  getId() {
    if (!this.state.id) {
      this.setState({id: createId()}, this.save.bind(this));
    }
    console.log("Account ID:", this.state.id);
    return this.state.id;
  }


}