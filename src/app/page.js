"use client";

import styles from "@/styles/home/Page.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import { useState } from "react";

import Link from "next/link";

import { experiences, projects } from "@/constants";

export default function Home() {
  const [mouseInExperience, setMouseInExperience] = useState(false);
  const [mouseInProjects, setMouseInProjects] = useState(false);

  return (
    <main id={styles.home}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <div className={styles.info}>
            <div className={styles.name}>Arshia Zakeri</div>
            <div className={styles.title}>Software Engineer</div>
            <div className={styles.shortIntro}>
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </div>
          </div>
          <div className={styles.listOfContent}>
            <ul>
              <li>about</li>
              <li>experiences</li>
              <li>projects</li>
              {/* <li>certifications</li> */}
            </ul>
          </div>
          <div className={styles.socials}>
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
        <div className={styles.contents}>
          <div className={styles.detailedAbout}>
            <div className={styles.title}>about</div>
            <div className={styles.wrapper}>
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I've had the privilege
              of building software for an advertising agency, a start-up, a huge
              corporation, and a digital product studio.
              <br />
              <br /> My main focus these days is building accessible user
              interfaces for our customers at Klaviyo. I most enjoy building
              software in the sweet spot where design and engineering meet —
              things that look good but are also built well under the hood. In
              my free time, I've also released an online video course that
              covers everything you need to know to build a web app with the
              Spotify API.
              <br />
              <br />
              When I'm not at the computer, I'm usually rock climbing, reading,
              hanging out with my wife and two cats, or running around Hyrule
              searching for Korok seeds Korok seeds.
            </div>
          </div>
          <div className={styles.experience}>
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
          <div className={styles.projects}>
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
