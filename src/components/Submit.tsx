import React, { FC } from "react";

import styles from "./Submit.module.scss";

interface ISubmit {
  children: string;
  className?: string;
}

const Submit: FC<ISubmit> = ({children, className}) => {
  return (
      <button className={[styles.container, className].join(" ")}>
        {children}
      </button>
  );
};

export default Submit;
