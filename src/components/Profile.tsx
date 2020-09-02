import React, { FC, useState, FormEvent } from "react";
import validator from "validator";
import { useTranslation } from "react-i18next";
import { IProfile, IProfileErrors } from "../models/data";
import { data, ui } from "../store";
import config from "../config";

import Input from "./Input";
import Submit from "./Submit";

import styles from "./Profile.module.scss";

const MIN_TEXTFIELD_LENGTH = 3;

export const initValues = {
  fio: "",
  phone: "",
  license: "",
  licenseDate: "",
  licenseDateExpire: "",
  carBrand: "",
  carModel: "",
  carColor: "",
  carYear: "",
  carRegNo: "",
  carVin: "",
  carSts: ""
};

const Profile: FC = () => {
  const t = useTranslation()[0];

  const [values, setValues] = useState<IProfile>(initValues);
  const [errors, setErrors] = useState<IProfileErrors>({});

  const submit = (e: FormEvent) => {
    const errors = Object.keys(values).reduce(
      (s: IProfileErrors, i: string) => {
        let value = values ? values[i] : undefined;
        switch (i) {
          case "fio":
            s.fio = !(value && value.length > MIN_TEXTFIELD_LENGTH);
            break;
          case "phone":
            s.phone = !(
              value &&
              validator.isMobilePhone(value.replace(/\D/g, ""), "ru-RU")
            );
            break;
          case "license":
            s.license = !(value && value.match(/\d{2}[а-яА-Яa-zA-Z0-9]{2} \d{6}/));
            break;
          case "licenseDate":
            s.licenseDate = !(value && value.match(/\d{2}\.\d{2}\.\d{4}/));
            break;
          case "licenseDateExpire":
            s.licenseDateExpire = !(
              value && value.match(/\d{2}\.\d{2}\.\d{4}/)
            );
            break;
          case "carBrand":
            s.carBrand = !(value && value.length > MIN_TEXTFIELD_LENGTH);
            break;
          case "carModel":
            s.carModel = !(value && value.length > MIN_TEXTFIELD_LENGTH);
            break;
          case "carColor":
            s.carColor = !(value && value.length > MIN_TEXTFIELD_LENGTH);
            break;
          case "carYear":
            s.carYear = !(value && value.match(/\d{4}/));
            break;
          case "carRegNo":
            s.carRegNo = !(
              value && value.match(/[а-яА-Яa-zA-Z]\d{3}[а-яА-Яa-zA-Z]{2} \d{3}/)
            );
            break;
          case "carVin":
            value = value && value.replace("_", "");
            s.carVin = !(
              value && value.length === 17
            );
            break;
          case "carSts":
            value = value && value.replace("_", "");
            s.carSts = !(
              value && value.length === 12
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
      data.sendProfile(values).then(result => {
        if (result !== false) {
          setValues(initValues);
          ui.setMessage({ text: t("profile.success") });
        } else {
          ui.setMessage({ text: t("profile.error"), type: "ERROR" });
        }
      });
    } else {
      setErrors(errors);
    }

    e.preventDefault();
  };

  const setValue = (value: string, name?: string) => {
    if (name) {
      setValues({ ...values, [name]: value });
    }
  };

  return (
    <form className={styles.container} onSubmit={e => submit(e)}>
      <Input
        type="text"
        placeholder={t("profile.fio")}
        name="fio"
        value={values.fio}
        onChange={setValue}
        error={errors.fio}
        validator={i => !!i && i.length > MIN_TEXTFIELD_LENGTH}
      />
      <Input
        type="tel"
        placeholder={t("profile.phone")}
        name="phone"
        value={values.phone}
        mask={config.phoneMask}
        onChange={setValue}
        error={errors.phone}
        validator={i => validator.isMobilePhone(i.replace(/\D/g, ""), "ru-RU")}
      />
      <Input
        type="text"
        placeholder={t("profile.license")}
        name="license"
        value={values.license}
        mask={config.licenseMask}
        validator={i => i.match(/\d{2}[а-яА-Яa-zA-Z]{2} \d{6}/)}
        onChange={setValue}
        error={errors.license}
      />
      <Input
        type="text"
        placeholder={t("profile.licenseDate")}
        name="licenseDate"
        value={values.licenseDate}
        mask={config.dateMask}
        validator={i => i.match(/\d{2}\.\d{2}\.\d{4}/)}
        pipe={config.datePipe}
        onChange={setValue}
        error={errors.licenseDate}
      />
      <Input
        type="text"
        placeholder={t("profile.licenseDateExpire")}
        name="licenseDateExpire"
        value={values.licenseDateExpire}
        validator={i => i.match(/\d{2}\.\d{2}\.\d{4}/)}
        mask={config.dateMask}
        pipe={config.datePipe}
        onChange={setValue}
        error={errors.licenseDateExpire}
      />

      <Input
        type="text"
        placeholder={t("profile.carBrand")}
        name="carBrand"
        value={values.carBrand}
        validator={i => !!i && i.length > MIN_TEXTFIELD_LENGTH}
        onChange={setValue}
        error={errors.carBrand}
      />
      <Input
        type="text"
        placeholder={t("profile.carModel")}
        name="carModel"
        validator={i => !!i && i.length > MIN_TEXTFIELD_LENGTH}
        value={values.carModel}
        onChange={setValue}
        error={errors.carModel}
      />
      <Input
        type="text"
        placeholder={t("profile.carColor")}
        name="carColor"
        validator={i => !!i && i.length > MIN_TEXTFIELD_LENGTH}
        value={values.carColor}
        onChange={setValue}
        error={errors.carColor}
      />
      <Input
        type="text"
        placeholder={t("profile.carYear")}
        name="carYear"
        mask={config.yearMask}
        validator={i => i.match(/\d{4}/)}
        value={values.carYear}
        onChange={setValue}
        error={errors.carYear}
      />
      <Input
        type="text"
        placeholder={t("profile.carRegNo")}
        name="carRegNo"
        mask={config.regNoMask}
        validator={i => i.match(/[а-яА-Яa-zA-Z]\d{3}[а-яА-Яa-zA-Z]{2} \d{3}/)}
        value={values.carRegNo}
        onChange={setValue}
        error={errors.carRegNo}
      />

      <Input
        type="text"
        placeholder={t("profile.carVin")}
        name="carVin"
        mask={config.vinMask}
        validator={i => i.match(/[а-яА-Яa-zA-Z]\d{3}[а-яА-Яa-zA-Z]{2} \d{3}/)}
        value={values.carVin}
        onChange={setValue}
        error={errors.carVin}
      />
      <Input
        type="text"
        placeholder={t("profile.carSts")}
        name="carSts"
        mask={config.stsMask}
        validator={i => i.match(/[а-яА-Яa-zA-Z]\d{3}[а-яА-Яa-zA-Z]{2} \d{3}/)}
        value={values.carSts}
        onChange={setValue}
        error={errors.carSts}
      />

      <Submit className={styles.button}>
        {t(`${data.sended ? "profile.submit2" : "profile.submit"}`)}
      </Submit>
    </form>
  );
};

export default Profile;
