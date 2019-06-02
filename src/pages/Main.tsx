import React from "react";
import { useTranslation } from "react-i18next";
import Callback from "../components/Callback";

import styles from "./Main.module.scss";

export default function() {
  const t = useTranslation()[0];
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{t("main.title")}</h1>
        <p>{t("main.description")}</p>
      </div>
      <Callback />
    </div>
  );
}
