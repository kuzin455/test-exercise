import React from "react";
import styles from "./index.module.css";
import { CASE_DECLENSION_MAP } from "./const";

const Table = ({ dataBody, dataHeader, bodyLayout, headerLayout }) => {
  return (
    <div className={styles.table}>
      <div className={styles.headerRow}>
        {dataHeader.map((item, index) => (
          <div
            key={item}
            className={styles.cell}
            style={{ width: headerLayout[index] + "%" }}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        {dataBody.map(({ name, item }) => {
          return (
            <div key={name} className={styles.bodyRow}>
              <div
                key={name}
                className={styles.cell}
                style={{ width: bodyLayout[0] + "%" }}
              >
                {CASE_DECLENSION_MAP[name]}
              </div>
              <div
                key={item}
                className={styles.cell}
                style={{ width: bodyLayout[1] + "%" }}
              >
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
