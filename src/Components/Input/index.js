import React from "react";
import styles from "./index.module.css";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      className={styles.root}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
