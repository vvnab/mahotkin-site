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
  placeholder?: string;
  onChange: (value: string, name?: string) => void;
  mask?: Array<string | RegExp>;
  pipe?: any;
  value?: string;
  error?: boolean;
  validator?: (value: string) => any;
  getSuggestions?: (value: string) => Promise<string[]>;
}

const Input: FC<IInput> = ({
  type,
  name,
  value,
  placeholder,
  mask,
  pipe,
  onChange,
  error,
  validator,
  getSuggestions
}) => {
  const props = {
    className: value ? styles.input : [styles.input, styles.empty].join(" "),
    type,
    name,
    value,
    placeholder,
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value, name)
  };
  const [suggestions, setSuggestions] = useState<string[] | undefined>();
  useEffect(() => {
    if (getSuggestions && value) {
      getSuggestions(value).then(setSuggestions);
    }
  }, [value, getSuggestions]);
  return (
    <div
      className={[
        styles.container,
        (validator && value ? !validator(value) && error : error) &&
          styles.error
      ].join(" ")}
    >
      {mask || pipe ? (
        pipe ? (
          <MaskedInput {...props} mask={mask} pipe={pipe}/>
        ) : (
          <MaskedInput {...props} mask={mask} />
        )
      ) : (
        <input {...props} />
      )}
      {value && <span className={styles.hint}>{placeholder}</span>}
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
