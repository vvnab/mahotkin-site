import React from "react";
import { HashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Callback from "../components/Callback";

import styles from "./Main.module.scss";

export default function() {
  const t = useTranslation()[0];
  return (
    <React.Fragment>
      <section className={styles.section_1}>
        <div className={styles.cover} />
        <div className={styles.container}>
          <div className={styles.title} id="callback">
            <h1>{t("main.title")}</h1>
            <p>
              {t("main.description")}{" "}
              <Link className={styles.link} to="/profile">
                {t("main.description_link")}
              </Link>
            </p>
          </div>
          <Callback />
        </div>
      </section>
      <section className={styles.section_2}>
        <div className={styles.container}>
          <h2>{t("main.cells-title")}</h2>
          <div className={styles.cells}>
            <div className={styles.cell}>
              <div>{t("main.cells.0.title")}</div>
              <div>{t("main.cells.0.description")}</div>
            </div>
            <div className={styles.cell}>
              <div>{t("main.cells.1.title")}</div>
              <div>{t("main.cells.1.description")}</div>
            </div>
            <div className={styles.cell}>
              <div>{t("main.cells.2.title")}</div>
              <div>{t("main.cells.2.description")}</div>
            </div>
            <div className={styles.cell}>
              <div>{t("main.cells.3.title")}</div>
              <div>{t("main.cells.3.description")}</div>
            </div>
          </div>
          <Link className={styles.link} to="/#callback">
            {t("main.cells-link")}
          </Link>
        </div>
      </section>
      <section className={styles.section_3}>
        <div className={styles.container}>
          <h2>{t("main.request.title")}</h2>
          <ol>
            <li>
              <h3>{t("main.request.steps.0.title")}</h3>
              <div>{t("main.request.steps.0.description")}</div>
            </li>
            <li>
              <h3>{t("main.request.steps.1.title")}</h3>
              <div>{t("main.request.steps.1.description")}</div>
            </li>
            <li>
              <h3>{t("main.request.steps.2.title")}</h3>
              <div>{t("main.request.steps.2.description")}</div>
            </li>
          </ol>
          <p />
        </div>
      </section>
      <section className={styles.section_4}>
        <div className={styles.container}>
          <h2>{t("main.work.title")}</h2>
          <p>{t("main.work.description")}</p>
          <Link className={styles.link} to="/#callback">
            {t("main.work.link")}
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
}
