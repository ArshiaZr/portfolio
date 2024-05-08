import Image from "next/image";
import styles from "@/styles/home/Page.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import Experience from "@/components/Experience";
import Project from "@/components/Project";

import Link from "next/link";

import { experiences, projects } from "@/constants";

export default function Home() {
  return (
    <main id={styles.home}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <div className={styles.info}></div>
          <div className={styles.listOfContent}>
            <ul>
              <li>about</li>
              <li>experience</li>
              <li>projects</li>
              <li>certifications</li>
            </ul>
          </div>
          <div className={styles.socials}>
            <div className={styles.each}>
              <Link href="#">
                <FaGithub />
              </Link>
              <Link href="#">
                <FaLinkedin />
              </Link>
              <Link href="#">
                <SiGmail />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.detailedAbout}></div>
          <div className={styles.experience}>
            <div className={styles.resume}>
              <Link href="/docs/resume.pdf" target="__blank">
                <p>View Full Résumé</p>
                <GoArrowUpRight />
              </Link>
            </div>
            {experiences.map((experience, index) => {
              return <Experience key={index} {...experience} />;
            })}
          </div>
          <div className={styles.projects}>
            {projects.map((project, index) => {
              return <Project key={index} {...project} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
