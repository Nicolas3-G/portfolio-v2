"use client";
import styles from "./ProjectSection.module.css";
import { useState } from "react";


const ProjectCard = () => {
    const [displayOverlay, setDisplayOverlay] = useState(false);

    return (
        <div onMouseEnter={() => setDisplayOverlay(true)} onMouseLeave={() => setDisplayOverlay(false)} className={styles["project-card"]}>
            {displayOverlay && <div className={styles.overlay}>
                <div className={styles["project-top-row"]}>
                    <div>
                       <h3 className={styles["project-title"]}>Crypto Secure</h3>
                       <p className={styles["project-tagline"]}>A cryptocurrency portfolio tracker that allows users to track their crypto holdings and view their portfolio's performance over time.</p> 
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
            <img src="project-images/crypto-secure.png" className={styles["project-image"]} />
        </div>
    )
}

const ProjectSection = () => {
    return (
        <div className={styles.holder}>
            <h2 className={styles.title}>My Portfolio</h2>
            <div className={styles["card-holder"]}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default ProjectSection;