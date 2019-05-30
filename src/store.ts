import { observable, action } from "mobx";
import { createBrowserHistory } from "history";

interface IMessage {
  text: string;
  type?: "ERROR" | "INFO" | "WARN";
  lifeTime?: number;
}

class UI {
  @observable loading: boolean = false;
  @observable message: string = "";
  @observable messageType: string = "INFO";

  interval: NodeJS.Timeout | null = null;

  @action setMessage({text, type = "INFO", lifeTime}: IMessage) {
    this.message = text;
    this.messageType = type;
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (text && lifeTime) {
      this.interval = setTimeout(() => this.setMessage({text: ""}), lifeTime);
    }
  }
}

export const ui = new UI();
export const history = createBrowserHistory();