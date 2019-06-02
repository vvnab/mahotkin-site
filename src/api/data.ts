import { ICallback } from "../models/data";
// import config from "../config";


export class DataAPI {
  static callback({ fio, phone }: ICallback): Promise<boolean> {
    return Promise.resolve(true);
  }
}