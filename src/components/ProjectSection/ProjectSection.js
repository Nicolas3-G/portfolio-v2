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
                {false && <div className={styles.overlay}>
                    <div className={styles["project-top-row"]}>
                        <div>
                            <h3 className={styles["project-overlay-title"]}>{title}</h3>
                            <p className={styles["project-overlay-tagline"]}>A cryptocurrency portfolio tracker that allows users to track their crypto holdings and view their portfolio's performance over time.</p>
                        </div>
                        {selectedProject == id && <img src="project-images/crypto-gif.gif" className={styles["mini-image"]} />}
                    </div>
                    <div className={styles["project-bottom-row"]}>
                        <div>
                            <h4 className={styles["project-subtitle"]}>Technologies Used</h4>
                        </div>
                        <button className={styles["site-button"]}>Live Site</button>
                    </div>

                    {/* <p className={styles["project-description"]}>A cryptocurrency portfolio tracker that allows users to track their crypto holdings and view their portfolio's performance over time.</p> */}
                </div>}
                <img src={img} className={styles["project-image"]} />
                <h3 className={styles["project-title"]}>{title}</h3>
                <p className={styles["project-desc"]}>Project description will go here.</p>
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
                    {selectedProject && <button className={styles["close-button"]} onClick={() => setSelectedProject(null)}><img className={styles["exit-icon"]} src="exit-icon.png"/></button>}
                </div>
            </div>
        </a>
    )
}

export default ProjectSection;