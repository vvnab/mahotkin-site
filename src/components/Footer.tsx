import React from "react";
import config from "../config";
import styles from "./Footer.module.scss";

const Map = () => (
  <iframe title="map" className={styles.mapContainer} src={config.map} />
);

const Form: React.FC = () => {
  return (
    <section className={styles.container} id="#footer">
      <div className={styles.content}>
        <div className={styles.contactsContainer}>
          <div className={styles.contacts}>!! sdfspdfoijs df'posdjfk 'dpsfog dsf</div>
        </div>
        <Map />
      </div>
    </section>
  );
};

export default Form;
