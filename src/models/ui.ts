export interface IMessage {
  text: string;
  type?: "ERROR" | "INFO" | "WARN";
  lifeTime?: number;
}
