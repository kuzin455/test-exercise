import React from "react";
import styles from "./index.module.css";
import { CASE_DECLENSION_MAP } from "./const";

const Table = ({ dataBody, dataHeader }) => {
  return (
    <div className={styles.table}>
      <div className={styles.headerRow}>
        {dataHeader.map((item) => (
          <div key={item} className={styles.cell}>{item}</div>
        ))}
      </div>

      <div className={styles.body}>
        {dataBody.map(({ name, item }) => {
          return (
            <div className={styles.bodyRow}>
              <div  className={styles.cell}>
                {CASE_DECLENSION_MAP[name]}
              </div>
              <div  className={styles.cell}>
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
