import React from "react";
import styles from "@/styles/home/Experience.module.scss";
import Tag from "@/components/Tag";
import LinkWithIcon from "@/components/LinkWithIcon";
import { GoArrowUpRight } from "react-icons/go";

export default function Experience({
  startDate,
  endDate,
  role,
  company,
  location,
  bulletPoints,
  tags = [],
  links = [],
  mouseIn = false,
}) {
  const renderDate = (startDate, endDate) => {
    // return date ? <p>{date}</p> : <p>Present</p>;
    return "";
  };
  return (
    <div className={`${styles.experience} ${mouseIn ? styles.deactive : ""}`}>
      <div className={styles.date}>
        {/* {renderDate(startDate, endDate)} */}
        2024 — Present
      </div>
      <div className={styles.details}>
        <div className={styles.roleAndCompany}>
          <span>{role}</span>&nbsp;·&nbsp;<span>{company}</span>&nbsp;
          <GoArrowUpRight />
        </div>
        <div className={styles.location}>
          <span>{location}</span>
        </div>
        <ul className={styles.bulletPoints}>
          {bulletPoints.map((bulletPoint, index) => (
            <li key={index}>·&nbsp;{bulletPoint}</li>
          ))}
        </ul>
        {links.length > 0 ? (
          <div className={styles.links}>
            {links.map((link, index) => (
              <LinkWithIcon key={index} {...link} />
            ))}
          </div>
        ) : (
          ""
        )}
        {tags.length > 0 ? (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
