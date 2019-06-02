import React, { FC, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const t = useTranslation()[0];
  const [menu, setMenu] = useState(false);
  const el = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, false);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside, false);
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    // @ts-ignore
    if (el && el.current && el.current.contains(e.target)) {
      return;
    } else {
      setMenu(false);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>{t("header.logo")}</div>
        <div className={[styles.menu, menu && styles.open].join(" ")}>
          <Link to="/" className={styles.menuItem}>
            {t("header.menu.0")}
          </Link>
          <Link to="/profile" className={styles.menuItem}>
            {t("header.menu.2")}
          </Link>
          <Link to="/#footer" className={styles.menuItem}>
            {t("header.menu.1")}
          </Link>
        </div>
        <div className={styles.contacts}>{t("header.phone")}</div>
        <div className={styles.bars} onClick={e => setMenu(!menu)} ref={el}>
          <Icon icon={faBars} />
        </div>
      </div>
    </section>
  );
};

export default Header;
