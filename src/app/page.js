"use client";

import styles from "@/styles/home/Page.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import { useEffect, useState, useRef } from "react";

import Link from "next/link";

import { experiences, projects } from "@/constants";

export default function Home() {
  const [mouseInExperience, setMouseInExperience] = useState(false);
  const [mouseInProjects, setMouseInProjects] = useState(false);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [active, setActive] = useState("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const prevScrollY = useRef(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  const onClickList = (ref, name) => {
    setActive(name);
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    // if going down by getting previous scrollY and comparing

    if (window.scrollY > prevScrollY.current) {
      if (window.scrollY >= projectsRef.current.offsetTop - 100) {
        if (active !== "projects") setActive("projects");
      } else if (window.scrollY >= experienceRef.current.offsetTop - 100) {
        if (active !== "experience") setActive("experience");
      } else if (window.scrollY >= aboutRef.current.offsetTop - 100) {
        if (active !== "about") setActive("about");
      }
    } else {
      if (window.scrollY <= aboutRef.current.offsetTop + 100) {
        if (active !== "about") setActive("about");
      } else if (window.scrollY <= experienceRef.current.offsetTop + 100) {
        if (active !== "experience") setActive("experience");
      } else if (window.scrollY <= projectsRef.current.offsetTop + 100) {
        if (active !== "projects") setActive("projects");
      }
    }
    prevScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id={styles.home}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <div className={styles.info}>
            <div className={styles.name}>Arshia Zakeri</div>
            <div className={styles.title}>Software Engineer, AI Engineer</div>
            <div className={styles.shortIntro}>
              I program computers to do cool things.
            </div>
          </div>
          <ul className={styles.listOfContent}>
            <li
              className={active === "about" ? styles.active : ""}
              onClick={() => {
                onClickList(aboutRef, "about");
              }}
            >
              <div className={styles.line}></div>&nbsp;&nbsp;about
            </li>
            <li
              className={active === "experience" ? styles.active : ""}
              onClick={() => {
                onClickList(experienceRef, "experience");
              }}
            >
              <div className={styles.line}></div>&nbsp;&nbsp;experiences
            </li>
            <li
              className={active === "projects" ? styles.active : ""}
              onClick={() => {
                onClickList(projectsRef, "projects");
              }}
            >
              <div className={styles.line}></div>&nbsp;&nbsp;projects
            </li>
            {/* <li>certifications</li> */}
          </ul>
          <div className={styles.socials}>
            <Link href="https://github.com/ArshiaZr" target="__blank">
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/arshiazakeri/"
              target="__blank"
            >
              <FaLinkedin />
            </Link>
            <Link href="mailto:zrr.arshia@gmail.com">
              <SiGmail />
            </Link>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.detailedAbout} ref={aboutRef}>
            <div className={styles.title}>about</div>
            <div className={styles.wrapper}>
              Driven software engineer with a strong background in development,
              DevOps, and leadership. Pursuing Machine Learning certifications.
              Passionate about mathematics, with two bronze medals from WMC and
              TIMO Olympics.
              <br />
              <br /> Lately, my main focus has been on crafting seamless
              full-stack solutions and diving deep into AI engineering and data
              science. I find my passion at the intersection of elegant design
              and robust engineering, where aesthetics harmonize with
              functionality. Beyond work, I'm pursuing a bachelor's degree in
              Computer Science with a minor in Mathematics, delving into the
              theoretical foundations that underpin modern technology.
              <br />
              <br />
              When I'm not at the computer, I'm typically playing soccer,
              practicing violin, immersing myself in music, or working out.
            </div>
          </div>
          <div className={styles.experience} ref={experienceRef}>
            <div className={styles.title}>experiences</div>
            <div className={styles.wrapper}>
              <div className={styles.resume}>
                <Link href="/docs/resume.pdf" target="__blank">
                  <p>View Full Résumé</p>
                  <GoArrowUpRight />
                </Link>
              </div>
              <div
                className={styles.experiencesWrapper}
                onMouseEnter={() => {
                  setMouseInExperience(true);
                }}
                onMouseLeave={() => {
                  setMouseInExperience(false);
                }}
              >
                {experiences.map((experience, index) => {
                  return (
                    <Experience
                      key={index}
                      {...experience}
                      mouseIn={mouseInExperience}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.projects} ref={projectsRef}>
            <div className={styles.title}>projects</div>
            <div
              className={styles.wrapper}
              onMouseEnter={() => {
                setMouseInProjects(true);
              }}
              onMouseLeave={() => {
                setMouseInProjects(false);
              }}
            >
              {projects.map((project, index) => {
                return (
                  <Project key={index} {...project} mouseIn={mouseInProjects} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
