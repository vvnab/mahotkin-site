import { observable, action } from "mobx";
import { createBrowserHistory } from "history";
import { DataAPI } from "./api/data";
import { IMessage } from "./models/ui";
import { ICallback } from "./models/data";

class UI {
  @observable message: string = "";
  @observable messageType: string = "INFO";

  interval: NodeJS.Timeout | null = null;

  @action setMessage({ text, type = "INFO", lifeTime }: IMessage) {
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
  @observable sending: boolean = false;
  @observable sended: boolean = false;

  @action.bound callback(data: ICallback): Promise<boolean> {
    return DataAPI.callback(data);
  }
}

export const ui = new UI();
export const data = new Data();
export const history = createBrowserHistory();