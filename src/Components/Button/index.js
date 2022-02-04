import React from "react";
import styles from "./index.module.css";

const Button = ({children, onSubmit, isDisabled}) => {
    return (
        <button className={styles.root}
                onClick={onSubmit}
                disabled={!isDisabled}> {children} </button>)

}

export default Button