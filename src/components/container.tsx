import React from "react";
import styles from "@/styles/container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProps) {
  return <div className={styles.default}>{children}</div>;
}
