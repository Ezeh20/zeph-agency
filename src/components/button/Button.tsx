import React from "react";
import styles from "./Button.module.scss";
interface PROPS {
  variant: string;
  label: string;
  className?: string;
}
export const Button: React.FC<PROPS> = ({ variant, label = "some label", className }) => {
  const style = () => {
    return variant === "primary"
      ? `${styles.primary} ${styles.button}`
      : variant === "secondary"
      ? `${styles.secondary} ${styles.button}`
      : `${styles.button}`;
  };
  return <button className={`${style()} ${className}`}>{label}</button>;
};
