import React, { FC, MouseEventHandler } from "react";

import styles from "./Message.module.scss";

interface IMessage {
  text: string;
  messageType?: "ERROR" | "INFO" | "WARN" | any;
  onClick: MouseEventHandler;
}

const Message: FC<IMessage> = ({ text, messageType = "INFO", onClick }) => {
  return (
    <div>
      {text && (
        <div className={styles.container}>
          <div onClick={onClick}>
            <div className={[styles.message, styles[messageType]].join(" ")}>
              {text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
