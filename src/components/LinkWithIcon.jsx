import styles from "@/styles/components/Link.module.scss";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { GrFormAttachment } from "react-icons/gr";

export default function LinkWithIcon({ title, link, target = "_blank" }) {
  return (
    <Link className={styles.link} href={link} target={target}>
      <GrFormAttachment />
      <span>{title}</span>
    </Link>
  );
}
