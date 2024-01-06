import React from "react";
import styles from "./Container.module.scss";
interface PROPS {
  children: React.ReactNode;
}
export const Container: React.FC<PROPS> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
