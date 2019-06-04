import React, { FC } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

import styles from "./Loader.module.scss";

interface ILoader {
  loading?: boolean;
}

const Loader: FC<ILoader> = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className={styles.wait}>
          <Icon className={styles.icon} icon={faHourglassHalf} />
        </div>
      )}
    </div>
  );
};

export default Loader;
