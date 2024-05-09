import styles from "@/styles/home/Project.module.scss";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Tag from "@/components/Tag";
import LinkWithIcon from "@/components/LinkWithIcon";

export default function Project({
  title,
  description,
  tags,
  image,
  video,
  links,
  demoLink,
  mouseIn = false,
}) {
  return (
    <div className={`${styles.project} ${mouseIn ? styles.deactive : ""}`}>
      <div className={styles.preview}>
        <div className={styles.visualWrapper}>
          {image && image.length > 0 && <img src={image} alt={title} />}
          {video && video.length > 0 && (
            <video src={video} autoPlay loop muted />
          )}
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.title}>
          <span>{title}</span>
          {demoLink ? <GoArrowUpRight /> : ""}
        </div>

        <div className={styles.description}>
          <p>{description}</p>
        </div>

        {links && links.length > 0 && (
          <div className={styles.links}>
            {links.map((link, index) => (
              <LinkWithIcon key={index} {...link} />
            ))}
          </div>
        )}

        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Tag key={index} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
