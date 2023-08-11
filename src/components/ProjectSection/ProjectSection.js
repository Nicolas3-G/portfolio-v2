"use client";
import classNames from "classnames";
import styles from "./ProjectSection.module.css";
import { useState } from "react";

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState();

    const SkillBubble = ({title, style}) => {
        return (
            <div className={`${styles.bubble} ${styles[style]}`}>
                {/* <img className={styles["bubble-image"]} src="socials/github-icon.png" /> */}
                <p>{title}</p>
            </div>
        )
    }

    const ProjectCard = ({ title, assetPath, id, siteLink, gitLink }) => {
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
                        <h3 className={styles["project-title"]}>{title}</h3>
                        <p className={styles["project-desc"]}>Project description will go here.</p>
                    </> :
                    <>
                        {/* FOCUSED(selected) PROJECT HTML*/}
                        <div className={styles["focused-project-left-section"]}>
                            <h3 className={styles["focused-project-title"]}>{title}</h3>
                            <p className={styles["focused-project-desc"]}>Crypto Secure is a cutting-edge web application built using Next.js, React, and HTML that empowers users to manage their cryptocurrency holdings with confidence and security. Whether you're a seasoned crypto investor or just getting started, Crypto Secure provides a user-friendly platform to track, monitor, and analyze your digital assets in real-time.</p>
                            <div className={styles["tech-section"]}>
                                Tech Stack:
                                <div className={styles["bubble-card"]}>
                                    <div className={styles["bubble-holder"]}>
                                        <SkillBubble title="HTML" style="html"/>
                                        <SkillBubble title="CSS" style="css"/>
                                        <SkillBubble title="JavaScript" style="js"/>
                                        <SkillBubble title="ReactJS" style="react"/>
                                        <SkillBubble title="NextJS" style="next"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles["focused-project-right-section"]}>
                            <img src={gifPath} className={styles["focused-project-image"]} />
                            <div className={styles["focused-button-bar"]}>
                                <a style={{textDecoration: "none"}} href={gitLink}><button className={`${styles["focused-button"]} ${styles["two"]}`}><img className={styles["focused-button-icon"]} src="socials/github-icon.png" /><p>Github</p></button></a>
                                <a style={{textDecoration: "none"}} href={siteLink}><button className={styles["focused-button"]}><img className={styles["focused-button-icon"]} src="live-site-icon.png" /><p>Live Site</p></button></a>

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
            <div className={styles.holder}>
                <h2 className={styles.title}>Featured Projects</h2>
                <div className={classNames(styles["card-holder"], selectedProject && styles[`focused-view-${selectedProject}`])}>
                    {/* Focused value checks that there is no project selected or if there is which one should be displayed */}
                    {/* ID should be set to order it appears in grid, used for click handling */}
                    <ProjectCard title="CryptoSecure" assetPath="crypto-secure" siteLink="https://crypto-secure.vercel.app/" gitLink="https://crypto-secure.vercel.app/" id={1} />
                    <ProjectCard title="Nextri" assetPath="nextri" id={2} siteLink="https://nextri.vercel.app/" />
                    <ProjectCard title="MyWeather" assetPath="my-weather" siteLink="https://nicolas3-g.github.io/MyWeather/" id={3} />
                    <ProjectCard title="DevBot Chat" assetPath="devbot" siteLink="https://nicolas3-g.github.io/devbot/" id={4} />
                    {selectedProject && <button className={styles["close-button"]} onClick={() => setSelectedProject(null)}><img className={styles["exit-icon"]} src="exit-icon.png" /></button>}
                </div>
            </div>
        </a>
    )
}

export default ProjectSection;