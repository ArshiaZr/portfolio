import React from "react";
import styles from "@/styles/home/Experience.module.scss";
import Tag from "@/components/Tag";
import LinkWithIcon from "@/components/LinkWithIcon";

export default function Experience({
  startDate,
  endDate,
  role,
  company,
  location,
  bulletPoints,
  tags = [],
  links = [],
}) {
  const renderDate = (startDate, endDate) => {
    // return date ? <p>{date}</p> : <p>Present</p>;
    return "";
  };
  return (
    <div className={styles.experience}>
      <div className={styles.date}>{renderDate(startDate, endDate)}</div>
      <div className={styles.details}>
        <div className={styles.roleAndCompany}>
          <h3>{role}</h3>
          <h4>{company}</h4>
        </div>
        <div className={styles.location}>
          <p>{location}</p>
        </div>
        <div className={styles.bulletPoints}>
          <ul>
            {bulletPoints.map((bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          {links.map((link, index) => (
            <LinkWithIcon key={index} {...link} />
          ))}
        </div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Tag key={index} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
