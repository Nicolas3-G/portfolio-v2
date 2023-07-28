"use client";
import styles from "./ProjectSection.module.css";
import { useState } from "react";


const ProjectCard = ({ title, img }) => {
    const [displayOverlay, setDisplayOverlay] = useState(false);

    return (
        <div onMouseEnter={() => setDisplayOverlay(true)} onMouseLeave={() => setDisplayOverlay(false)} className={styles["project-card"]}>
            {false && <div className={styles.overlay}>
                <div className={styles["project-top-row"]}>
                    <div>
                       <h3 className={styles["project-overlay-title"]}>{title}</h3>
                       <p className={styles["project-overlay-tagline"]}>A cryptocurrency portfolio tracker that allows users to track their crypto holdings and view their portfolio's performance over time.</p> 
                    </div>
                    <img src="project-images/crypto-gif.gif" className={styles["mini-image"]} />
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

const ProjectSection = () => {
    return (
        <div className={styles.holder}>
            <h2 className={styles.title}>Featured Projects</h2>
            <div className={styles["card-holder"]}>
                <ProjectCard title="CryptoSecure" img="project-images/crypto-secure.png"/>
                <ProjectCard title="Nextri" img="project-images/nextri.png"/>
                <ProjectCard title="MyWeather" img="project-images/my-weather.png"/>
                <ProjectCard title="DevBot Chat" img="project-images/devbot.png"/>
            </div>
        </div>
    )
}

export default ProjectSection;