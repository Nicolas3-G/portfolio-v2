"use client";
import classNames from "classnames";
import styles from "./ProjectSection.module.css";
import { useState } from "react";
import Image from "next/image";

const ProjectSection = ({ scrollAnimationList }) => {
  const [selectedProject, setSelectedProject] = useState();

  const bubbleDataObject = {
    html: {
      title: "HTML",
      style: "html",
      image: "skill-icons/html-icon-green.png",
    },
    css: {
      title: "CSS",
      style: "css",
      image: "skill-icons/css-icon-red.png",
    },
    javascript: {
      title: "JavaScript",
      style: "js",
      image: "skill-icons/javascript-icon-orange.png",
    },
    react: {
      title: "ReactJS",
      style: "react",
      image: "skill-icons/react-icon-blue.png",
    },
    next: {
      title: "NextJS",
      style: "next",
      image: "skill-icons/next-icon.png",
    },
    node: {
      title: "NodeJS",
      style: "node",
      image: "skill-icons/node-icon-purple.png",
    },
    firebase: {
      title: "Firebase",
      style: "firebase",
      image: "skill-icons/firebase-icon-blue.png",
    },
  };

  const SkillBubble = ({ title, style, image }) => {
    return (
      <div className={`${styles["bubble-element"]}`}>
        <div className={`${styles["bubble"]} ${styles[style]}`}>
          <img src={image} className={styles["bubble-image"]} />
        </div>
        <p className={`${styles["bubble-title"]} ${styles[style]}`}>{title}</p>
      </div>
    );
  };

  const ProjectCard = ({
    title,
    assetPath,
    id,
    siteLink,
    gitLink,
    quickDesc,
    skills,
    fullDesc,
  }) => {
    const [displayOverlay, setDisplayOverlay] = useState(false);

    const imgPath = `project-images/${assetPath}.png`;
    const vidPath = `project-images/${assetPath}-vid.mp4`;

    const handleProjectClick = () => {
      if (selectedProject == id) return;
      setSelectedProject(id);
    };

    const handleMobileExitClick = () => {
      console.log("mobile exit click");
      setSelectedProject(null);
    };

    return (
      <div
        onClick={handleProjectClick}
        onMouseEnter={() => setDisplayOverlay(true)}
        onMouseLeave={() => setDisplayOverlay(false)}
        className={classNames(
          styles["project-card"],
          selectedProject == id && styles["selected"],
          selectedProject && selectedProject != id && styles["not-selected"],
          styles[`selected-${id}`]
        )}
      >
        {selectedProject != id ? (
          <>
            <div className={styles["project-image-container"]}>
              <Image
                src={"/" + imgPath}
                alt="Project Image"
                fill
                className={`${styles["project-image"]}`}
              />{" "}
            </div>
            <div className={styles["project-bottom-section"]}>
              <div>
                <h3 className={styles["project-title"]}>{title}</h3>
                <p className={styles["project-desc"]}>{quickDesc}</p>
              </div>
              <img className={styles["expand-icon"]} src="expand-icon-2.png" />
            </div>
          </>
        ) : (
          <>
            {/* FOCUSED(selected) PROJECT HTML*/}
            <div className={styles["focused-project-left-section"]}>
              <h3 className={styles["focused-project-title"]}>{title}</h3>
              <p className={styles["focused-project-desc"]}>{fullDesc}</p>
              <div className={styles["tech-section"]}>
                <p className={styles["tech-section-title"]}>
                  Tech Stack<span className={styles["colon"]}>:</span>
                </p>
                <div className={styles["bubble-card"]}>
                  <div className={styles["bubble-holder"]}>
                    {skills.map((skill, idx) => (
                      <SkillBubble key={idx} {...bubbleDataObject[skill]} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["focused-project-right-section"]}>
            <div className={styles["focused-project-image-container"]}>
              <video
                autoPlay={true}
                loop
                className={styles["focused-project-image"]}
              >
                <source src={vidPath} type="video/mp4" />
              </video>
              </div>
              {/* <img src={gifPath} className={styles["focused-project-image"]} /> */}
              <div className={styles["focused-button-bar"]}>
                {gitLink != "#" && (
                  <a
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    href={gitLink}
                  >
                    <button
                      className={`${styles["focused-button"]} ${styles["two"]}`}
                    >
                      <img
                        className={styles["focused-button-icon"]}
                        src="socials/github-icon.png"
                      />
                      <p>Github</p>
                    </button>
                  </a>
                )}
                <a
                  style={{ textDecoration: "none" }}
                  href={siteLink}
                  target="_blank"
                >
                  <button className={styles["focused-button"]}>
                    <img
                      className={styles["focused-button-icon"]}
                      src="live-site-icon.png"
                    />
                    <p>Live Site</p>
                  </button>
                </a>
              </div>
            </div>
            <button
              className={styles["close-button-mobile"]}
              onClick={handleMobileExitClick}
            >
              <img className={styles["exit-icon-mobile"]} src="exit-icon.png" />
            </button>
          </>
        )}
      </div>
    );
  };

  const focusedValue = (id) => {
    if (!selectedProject) return true;
    if (selectedProject == id) return true;
    return false;
  };

  // Project descriptions
  const overviewDesc =
    "Overview World News delivers a fresh perspective on global events. I serve as the sole developer for the backend, handling all content management, and designed and implemented the article views in the iOS app, which is currently in closed beta testing. Additionally, I developed the paired web app and an internal tooling app for inspecting and managing backend data and content.";
  const DpdDesc =
    "DPDing: Dreamer Planner Doer is an app built around the DPD Framework to enhance team productivity and collaboration. I serve as the sole developer for the React Native iOS app, which is publicly available on the App Store and coming soon to Android. I also developed the paired web app, enabling team managers to inspect and manage team data efficiently";
  const oomphDesc =
    "For this project I was tasked with building a landing page for a in development dating app! I worked closely their designers to perfectly replicate the figma designs. Attention to detail was everything with this project and I was proud to deliver something that went beyond their expectations and within a week!";
  const allgolfholesDesc =
    "All Golf Holes is a platform that provides golfers with comprehensive information on golf courses around the US. I worked on the integration of a CMS on this project to allow easy updating by the content team, and various other functionalities and improvements. The name of the game here was SEO and I learned a lot working on this one!";

  return (
    <a name="projects">
      <div
        className={classNames(
          styles.holder,
          scrollAnimationList[0] && styles["fade-in"]
        )}
      >
        <h2 className={styles.title}>Featured Projects</h2>
        <div
          className={classNames(
            styles["card-holder"],
            selectedProject && styles[`focused-view-${selectedProject}`]
          )}
        >
          {/* Focused value checks that there is no project selected or if there is which one should be displayed */}
          {/* ID should be set to order it appears in grid, used for click handling */}
          <ProjectCard
            skills={["html", "css", "javascript", "firebase", "node", "next"]}
            title="Overview World News"
            fullDesc={overviewDesc}
            quickDesc="IOS & Web App for news all around the globe"
            assetPath="overview"
            siteLink="https://www.overviewpress.com/"
            gitLink="#"
            id={1}
          />
          <ProjectCard
            skills={["html", "css", "javascript", "react", "next", "firebase"]}
            title="DPDing: Dreamer Planner Doer"
            fullDesc={DpdDesc}
            quickDesc="Mobile app for team productivity and cohesion"
            assetPath="dpd"
            siteLink="https://apps.apple.com/us/app/dpding-dreamer-planner-doer/id6746777165"
            gitLink="#"
            id={2}
          />
          <ProjectCard
            skills={["html", "css", "javascript", "next", "react"]}
            title="Oomph Dating"
            fullDesc={oomphDesc}
            quickDesc="A landing page for a up and coming dating app"
            assetPath="oomph"
            id={3}
            siteLink="https://www.oomphdating.com/"
            gitLink="#"
          />
          <ProjectCard
            skills={["html", "css", "javascript", "react", "next"]}
            title="All Golf Holes"
            fullDesc={allgolfholesDesc}
            quickDesc="An SEO optimized platform for all things golf"
            assetPath="allgolfholes"
            siteLink="https://www.allgolfholes.com/"
            gitLink="#"
            id={4}
          />
          {selectedProject && (
            <button
              className={styles["close-button"]}
              onClick={() => setSelectedProject(null)}
            >
              <img className={styles["exit-icon"]} src="exit-icon.png" />
            </button>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectSection;
