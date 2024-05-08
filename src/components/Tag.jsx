import React from "react";
import styles from "@/styles/components/Tag.module.scss";

export default function Experience({ title }) {
  return <div className={styles.tag}>{title}</div>;
}
