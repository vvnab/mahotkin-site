import React, { FC, ChangeEvent, useState, useEffect } from "react";
import MaskedInput from "react-text-mask";

import styles from "./Input.module.scss";

interface ISuggest {
  children: string;
}

const Suggest: FC<ISuggest> = ({ children }) => {
  return <div className={styles.suggest}>{children}</div>;
};

interface IInput {
  type: string;
  name: string;
  onChange: (value: string) => void;
  mask?: Array<string | RegExp>;
  value?: string;
  error?: boolean;
  validator?: (value: string) => boolean;
  getSuggestions?: (value: string) => Promise<string[]>;
}

const Input: FC<IInput> = ({
  type,
  name,
  value,
  mask,
  onChange,
  error,
  validator,
  getSuggestions
}) => {
  const props = {
    className: styles.input,
    type,
    name,
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
  };
  const [suggestions, setSuggestions] = useState<string[] | undefined>();
  useEffect(() => {
    if (getSuggestions && value) {
      getSuggestions(value).then(setSuggestions);
    }
  }, [value]);
  return (
    <div
      className={[
        styles.container,
        (validator && value ? validator(value) && error : error) && styles.error
      ].join(" ")}
    >
      {mask ? <MaskedInput {...props} /> : <input {...props} />}
      {suggestions && (
        <div className={styles.suggestions}>
          {suggestions.map((i, k) => (
            <Suggest key={k}>{i}</Suggest>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
