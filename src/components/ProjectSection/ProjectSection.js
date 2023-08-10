"use client";
import classNames from "classnames";
import styles from "./ProjectSection.module.css";
import { useState } from "react";

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState();

    const ProjectCard = ({ title, img, id }) => {
        const [displayOverlay, setDisplayOverlay] = useState(false);


        const handleProjectClick = () => {
            setSelectedProject(id);
        }

        return (
            <div onClick={handleProjectClick} onMouseEnter={() => setDisplayOverlay(true)} onMouseLeave={() => setDisplayOverlay(false)} className={classNames(styles["project-card"], selectedProject == id && styles["selected"], (selectedProject && selectedProject != id) && styles["not-selected"])}>
                {selectedProject != id ?
                    <>
                        <img src={img} className={styles["project-image"]} />
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
                            </div>
                        </div>
                        <div className={styles["focused-project-right-section"]}>
                          <img src={img} className={styles["focused-project-image"]} /> 
                          <div className={styles["focused-button-bar"]}>
                            <button className={styles["focused-button"]} style={{background: "#202123", color: "white"}}><img className={styles["focused-button-icon"]} src="socials/github-icon.png"/><p>Github</p></button>
                            <button className={styles["focused-button"]}><img className={styles["focused-button-icon"]} src="live-site-icon.png"/><p>Live Site</p></button>
                    
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
                    <ProjectCard title="CryptoSecure" img="project-images/crypto-secure.png" id={1} />
                    <ProjectCard title="Nextri" img="project-images/nextri.png" id={2} />
                    <ProjectCard title="MyWeather" img="project-images/my-weather.png" id={3} />
                    <ProjectCard title="DevBot Chat" img="project-images/devbot.png" id={4} />
                    {selectedProject && <button className={styles["close-button"]} onClick={() => setSelectedProject(null)}><img className={styles["exit-icon"]} src="exit-icon.png" /></button>}
                </div>
            </div>
        </a>
    )
}

export default ProjectSection;