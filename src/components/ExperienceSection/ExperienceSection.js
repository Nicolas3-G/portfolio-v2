import styles from "./ExperienceSection.module.css";

const ExperienceSection = () => {
    const Skill = ({ name, img }) => {
        return (
            <div className={styles["skill-holder"]}>
                <img className={styles["skill-icon"]} src={img} />
                <h3 className={styles["skill-title"]}>{name}</h3>
            </div>
        )
    }

    return (
        <div className={styles.holder}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles["highlight-card"]}>
                <div className={styles["highlight-holder"]}>
                    <h3 style={{ textAlign: "center" }}>Highlights</h3>
                    <div className={styles["highlight"]}>
                        <h5 className={styles["highlight-title"]}>Software Engineer</h5>
                        <img className={styles["highlight-icon"]} src="preframing-logo.png" />
                        <h6 className={styles["highlight-job-name"]}>Preframing Corp</h6>
                        <p className={styles["highlight-date"]}>Jan 2023 - Present</p>
                    </div>
                    <div className={styles["highlight"]}>
                        <h5 className={styles["highlight-title"]}>Software Engineer</h5>
                        <img className={styles["highlight-icon"]} src="preframing-logo.png" />
                        <h6 className={styles["highlight-job-name"]}>Preframing Corp</h6>
                        <p className={styles["highlight-date"]}>Jan 2023 - Present</p>
                    </div>
                    <div className={styles["highlight"]}>
                        <h5 className={styles["highlight-title"]}>Software Engineer</h5>
                        <img className={styles["highlight-icon"]} src="preframing-logo.png" />
                        <h6 className={styles["highlight-job-name"]}>Preframing Corp</h6>
                        <p className={styles["highlight-date"]}>Jan 2023 - Present</p>
                    </div>
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
                <h2 className={styles.title}>Skills</h2>
                <div className={styles["skills-holder"]}>
                    <Skill name="CSS3" img="skill-icons/css-icon.png"/>
                    <Skill name="HTML5" img="skill-icons/html-icon.png"/>
                    <Skill name="JavaScript" img="skill-icons/javascript-icon.png"/>
                    <Skill name="TypeScript" img="skill-icons/typescript-icon.png"/>
                    <Skill name="React" img="skill-icons/react-icon.png"/>
                    <Skill name="NextJS" img="skill-icons/next-icon.png"/>
                    <Skill name="MongoDB" img="skill-icons/mongo-icon.png"/>
                    <Skill name="NodeJS" img="skill-icons/node-icon.png"/>
                    <Skill name="Python" img="skill-icons/python-icon.png"/>
                    <Skill name="Git" img="skill-icons/git-icon.png"/>
                    <Skill name="Sass" img="skill-icons/sass-icon.png"/>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection;