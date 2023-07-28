import styles from "./ExperienceSection.module.css";

const ExperienceSection = () => {
    return (
        <div className={styles.holder}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles["highlight-card"]}>
                <div className={styles["highlight-holder"]}>
                    Highlight Holder
                </div>
                <div className={styles["mid-line"]} />
                <div className={styles["resume-holder"]}>
                    <h3>Resume</h3>
                    <img className={styles["resume-icon"]} src="resume-icon.png" alt="resume" />
                    <button className={styles.button}>Download</button>
                    <button className={styles.button}>View</button>
                </div>
            </div>
            <div>
                Testimonials
            </div>
        </div>
    )
}

export default ExperienceSection;