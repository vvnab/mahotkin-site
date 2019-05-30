import React from "react";
import { useTranslation } from "react-i18next";
import Form from "../components/Form";

export default function() {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <h1>{t("main.title")}</h1>
      <p>{t("main.description")}</p>
      <Form />
    </div>
  );
}
