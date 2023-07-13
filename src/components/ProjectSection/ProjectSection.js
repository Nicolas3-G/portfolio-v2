import styles from "./ProjectSection.module.css";


const ProjectCard = () => {
    return (
        <div className={styles["project-card"]}>
            <img src="project-images/crypto-secure.png" className={styles["project-image"]}/>
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