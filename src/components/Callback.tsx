import React, { FC, useState, FormEvent } from "react";
import validator from "validator";
import { useTranslation } from "react-i18next";
import { ICallback, ICallbackErrors } from "../models/data";
import { data, ui } from "../store";
import config from "../config";

import Input from "./Input";
import Submit from "./Submit";

import styles from "./Callback.module.scss";

const Callback: FC = () => {
  const t = useTranslation()[0];
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<ICallbackErrors>({});

  const submit = (e: FormEvent) => {
    const formData: ICallback = { fio, phone };
    const errors = Object.keys(formData).reduce(
      (s: ICallbackErrors, i: string) => {
        const value = formData[i];
        switch (i) {
          case "fio":
            s.fio = !(value && value.length > 1);
            break;
          case "phone":
            s.phone = !(
              phone &&
              validator.isMobilePhone(phone.replace(/\D/g, ""), "ru-RU")
            );
            break;
          default:
            break;
        }
        return s;
      },
      {}
    );

    const hasErrors = Object.keys(errors).reduce(
      (s, i) => s || !!errors[i],
      false
    );

    if (!hasErrors) {
      data.callback(formData).then(result => {
        if (result !== false) {
          ui.setMessage({text: t('callback.success')});
          setFio("");
          setPhone("");
        } else {
          ui.setMessage({text: t('callback.error'), type: "ERROR"});
        }
      });
    }

    setErrors(errors);
    e.preventDefault();
  };
  return (
    <form className={styles.container} onSubmit={e => submit(e)}>
      <Input
        type="text"
        placeholder={t("callback.fio")}
        name="fio"
        value={fio}
        onChange={(value, name) => setFio(value)}
        error={errors.fio}
        validator={i => !!i && i.length > 1}
      />
      <Input
        type="tel"
        placeholder={t("callback.phone")}
        name="phone"
        value={phone}
        mask={config.phoneMask}
        onChange={(value, name) => setPhone(value)}
        error={errors.phone}
        validator={i => validator.isMobilePhone(i.replace(/\D/g, ""), "ru-RU")}
      />
      <Submit className={styles.button}>{t("callback.submit")}</Submit>
    </form>
  );
};

export default Callback;
