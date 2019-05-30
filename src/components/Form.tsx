import React, { FC } from "react";
import { history, ui } from "../store";

import Input from "./Input";

import styles from "./Form.module.scss";

const Form: FC = () => {
  return (
    <form className={styles.container}>
      <Input
        type="text"
        name="fio"
        value="911"
        onChange={value => console.log(value)}
        error={true}
      />
    </form>
  );
};

export default Form;
