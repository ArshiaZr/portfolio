import React from "react";
import styles from "@/styles/home/Experience.module.scss";
import Tag from "@/components/Tag";
import LinkWithIcon from "@/components/LinkWithIcon";
import { GoArrowUpRight } from "react-icons/go";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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
    const start = startDate.split("/");
    let end;
    if (endDate === "present") {
      end = "present";
    } else {
      end = endDate.split("/");
    }
    const startMonth = months[parseInt(start[0]) - 1];
    let endMonth;
    if (end === "present") {
      endMonth = "Present";
    } else {
      endMonth = months[parseInt(end[0]) - 1];
    }
    return (
      <span>
        {startMonth} {start[1]} -{" "}
        {end === "present" ? "Present" : `${endMonth} ${end[1]}`}
      </span>
    );
  };
  return (
    <div className={`${styles.experience} ${mouseIn ? styles.deactive : ""}`}>
      <div className={styles.date}>
        {/* {renderDate(startDate, endDate)} */}
        {renderDate(startDate, endDate)}
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
