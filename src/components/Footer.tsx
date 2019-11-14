import React from "react";
import { useTranslation } from "react-i18next";

import config from "../config";

import styles from "./Footer.module.scss";

const Map = () => (
  <iframe className={styles.mapContainer} src={config.map} frameBorder="0"></iframe>
);

const Footer: React.FC = () => {
  const t = useTranslation()[0];
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contactsContainer}>
          <ul className={styles.contacts}>
            <li>{t('contacts.address')}</li>
            <li>{t('contacts.phone')}</li>
            <li>{t('contacts.viber')}</li>
            <li>{t('contacts.email')}</li>
          </ul>
        </div>
        <Map />
      </div>
      <div id="footer"></div>
    </section>
  );
};

export default Footer;
