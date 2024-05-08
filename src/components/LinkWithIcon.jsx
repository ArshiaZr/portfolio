import styles from "@/styles/components/Link.module.scss";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function LinkWithIcon({ title, link, target = "_blank" }) {
  return (
    <Link className={styles.link} href={link} target={target}>
      <span>{title}</span> <GoArrowUpRight />
    </Link>
  );
}
