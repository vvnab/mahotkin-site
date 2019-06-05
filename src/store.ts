import { observable, action } from "mobx";
import { createBrowserHistory } from "history";
import { DataAPI } from "./api/data";
import { IMessage } from "./models/ui";
import { ICallback, IProfile } from "./models/data";

import { initValues } from "./components/Profile";

const profileInitValues = Object.keys(initValues).reduce((s: IProfile, i) => { s[i] = '----'; return s; }, {});

class UI {
  @observable message: string = "";
  @observable messageType: string = "INFO";
  @observable loading: boolean = false;

  interval: NodeJS.Timeout | null = null;

  @action.bound setMessage({ text, type = "INFO", lifeTime }: IMessage) {
    this.message = text;
    this.messageType = type;
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (text && lifeTime) {
      this.interval = setTimeout(() => this.setMessage({ text: "" }), lifeTime);
    }
  }
}

class Data {
  @observable sended: boolean = false;

  @action.bound async callback(data: ICallback): Promise<any> {
    let result = false;
    ui.loading = true;
    try {
      result = await DataAPI.sendProfile({ timestamp: new Date().toLocaleString(), ...profileInitValues, ...data });
      try {
        await DataAPI.callback(data);
      } catch (err) {
        console.error("viber bot", err);
      }
      this.sended = true;
    } catch (err) {
      console.error(err);
    }
    ui.loading = false;
    return result;
  }

  @action.bound async sendProfile(data: IProfile): Promise<any> {
    let result = false;
    ui.loading = true;
    try {
      result = await DataAPI.sendProfile({ timestamp: new Date().toLocaleString(), ...data });
      this.sended = true;
    } catch (err) {
      console.error(err);
    }
    ui.loading = false;
    return result;
  }
}

export const ui = new UI();
export const data = new Data();
export const history = createBrowserHistory();