import React from "react";
// import { useTranslation } from "react-i18next";
import Profile from "../components/Profile";

import styles from "./Profile.module.scss";

export default function() {
  return (
    <section className={styles.container}>
      <Profile />
    </section>
  );
}
