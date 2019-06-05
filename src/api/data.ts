import { ICallback, IProfile } from "../models/data";
import config from "../config";
import API from "./index";


export class DataAPI {
  static async callback(data: ICallback): Promise<boolean> {
    return Promise.resolve(true);
  }

  static async sendProfile(data: IProfile): Promise<boolean> {
    return await API.request("GET", config.sheetUrl, {
      query: data
    });
  }
}