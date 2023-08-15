"use client";
import classNames from "classnames";
import styles from "./ProjectSection.module.css";
import { useState } from "react";

const ProjectSection = ({ scrollAnimationList }) => {
    const [selectedProject, setSelectedProject] = useState();

    const bubbleDataObject = {
        html: {
            title: "HTML",
            style: "html",
            image: "skill-icons/html-icon-green.png"
        },
        css: {
            title: "CSS",
            style: "css",
            image: "skill-icons/css-icon-red.png"
        },
        javascript: {
            title: "JavaScript",
            style: "js",
            image: "skill-icons/javascript-icon-orange.png"
        },
        react: {
            title: "ReactJS",
            style: "react",
            image: "skill-icons/react-icon-blue.png"
        },
        next: {
            title: "NextJS",
            style: "next",
            image: "skill-icons/next-icon.png"
        },
        node: {
            title: "NodeJS",
            style: "node",
            image: "skill-icons/node-icon-purple.png"
        },
    }

    const SkillBubble = ({ title, style, image }) => {
        return (

            <div className={`${styles["bubble-element"]}`}>
                <div className={`${styles["bubble"]} ${styles[style]}`}>
                    <img src={image} className={styles["bubble-image"]}/>
                </div>
                <p className={`${styles["bubble-title"]} ${styles[style]}`}>{title}</p>
            </div>
        )
    }

    const ProjectCard = ({ title, assetPath, id, siteLink, gitLink, quickDesc, skills }) => {
        const [displayOverlay, setDisplayOverlay] = useState(false);

        const imgPath = `project-images/${assetPath}.png`;
        const gifPath = `project-images/${assetPath}-gif.gif`;

        const handleProjectClick = () => {
            setSelectedProject(id);
        }

        return (
            <div onClick={handleProjectClick} onMouseEnter={() => setDisplayOverlay(true)} onMouseLeave={() => setDisplayOverlay(false)} className={classNames(styles["project-card"], selectedProject == id && styles["selected"], (selectedProject && selectedProject != id) && styles["not-selected"])}>
                {selectedProject != id ?
                    <>
                        <img src={imgPath} className={styles["project-image"]} />
                        <div className={styles["project-bottom-section"]}>
                            <div>
                                <h3 className={styles["project-title"]}>{title}</h3>
                                <p className={styles["project-desc"]}>{quickDesc}</p>
                            </div>
                            <img className={styles["expand-icon"]} src="expand-icon-2.png"/>
                        </div>

                    </> :
                    <>
                        {/* FOCUSED(selected) PROJECT HTML*/}
                        <div className={styles["focused-project-left-section"]}>
                            <h3 className={styles["focused-project-title"]}>{title}</h3>
                            <p className={styles["focused-project-desc"]}>Crypto Secure is a cutting-edge web application built using Next.js, React, and HTML that empowers users to manage their cryptocurrency holdings with confidence and security. Whether you&apos;re a seasoned crypto investor or just getting started, Crypto Secure provides a user-friendly platform to track, monitor, and analyze your digital assets in real-time.</p>
                            <div className={styles["tech-section"]}>
                                Tech Stack:
                                <div className={styles["bubble-card"]}>
                                    <div className={styles["bubble-holder"]}>
                                        {skills.map((skill, idx) => <SkillBubble key={idx}  {...bubbleDataObject[skill]} />)}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles["focused-project-right-section"]}>
                            <img src={gifPath} className={styles["focused-project-image"]} />
                            <div className={styles["focused-button-bar"]}>
                                <a style={{ textDecoration: "none" }} target="_blank" href={gitLink}><button className={`${styles["focused-button"]} ${styles["two"]}`}><img className={styles["focused-button-icon"]} src="socials/github-icon.png" /><p>Github</p></button></a>
                                <a style={{ textDecoration: "none" }} href={siteLink} target="_blank"><button className={styles["focused-button"]}><img className={styles["focused-button-icon"]} src="live-site-icon.png" /><p>Live Site</p></button></a>

                            </div>
                        </div>


                    </>}

            </div>
        )
    }

    const focusedValue = (id) => {
        if (!selectedProject) return true;
        if (selectedProject == id) return true;
        return false;
    }

    return (
        <a name="projects">
            <div className={classNames(styles.holder, scrollAnimationList[0] && styles["fade-in"])}>
                <h2 className={styles.title}>Featured Projects</h2>
                <div className={classNames(styles["card-holder"], selectedProject && styles[`focused-view-${selectedProject}`])}>
                    {/* Focused value checks that there is no project selected or if there is which one should be displayed */}
                    {/* ID should be set to order it appears in grid, used for click handling */}
                    <ProjectCard skills={["html", "css", "javascript", "next", "react"]} title="CryptoSecure" quickDesc="Streamlined crypto banking platform" assetPath="crypto-secure" siteLink="https://crypto-secure.vercel.app/" gitLink="https://github.com/Nicolas3-G/CryptoSecure" id={1} />
                    <ProjectCard skills={["html", "css", "javascript", "next", "react"]} title="Nextri" quickDesc="User-friendly clothing e-commerce site" assetPath="nextri"  id={2} siteLink="https://nextri.vercel.app/" gitLink="https://github.com/Nicolas3-G/Nextri" />
                    <ProjectCard skills={["html", "css", "javascript", "react", "node"]} title="MyWeather" quickDesc="Intuitive weather app for accurate forecasts" assetPath="my-weather" siteLink="https://nicolas3-g.github.io/MyWeather/" gitLink="https://github.com/Nicolas3-G/MyWeather" id={3} />
                    <ProjectCard skills={["html", "css", "javascript", "react"]} title="DevBot Chat" quickDesc="A trio of interactive chatbots at your service" assetPath="devbot" siteLink="https://nicolas3-g.github.io/devbot/" gitLink="https://github.com/Nicolas3-G/devbot" id={4} />
                    {selectedProject && <button className={styles["close-button"]} onClick={() => setSelectedProject(null)}><img className={styles["exit-icon"]} src="exit-icon.png" /></button>}
                </div>
            </div>
        </a>
    )
}

export default ProjectSection;