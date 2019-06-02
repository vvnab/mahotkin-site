import React from "react";
import { useTranslation } from "react-i18next";
import Callback from "../components/Callback";

export default function() {
  const t = useTranslation()[0];
  return (
    <div>
      <h1>{t("main.title")}</h1>
      <p>{t("main.description")}</p>
      <Callback />
    </div>
  );
}
