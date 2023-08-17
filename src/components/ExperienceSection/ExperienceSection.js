import { useState } from "react";
import styles from "./ExperienceSection.module.css";
import classNames from "classnames";

const ExperienceSection = ({ scrollAnimationList }) => {
    const [showOverlay, setShowOverlay] = useState(false);


    const Skill = ({ name, img }) => {
        return (
            <div className={styles["skill-holder"]}>
                <img className={styles["skill-icon"]} src={img} />
                <h3 className={styles["skill-title"]}>{name}</h3>
            </div>
        )
    }

    const handleDownloadClick = async () => {
        try {
            // Fetch the file
            const response = await fetch("resume.pdf");
            const fileData = await response.blob();

            // Create a Blob with the file
            const blob = new Blob([fileData], { type: 'application/pdf' });

            // Create a URL for the Blob
            const url = URL.createObjectURL(blob);

            // Create a link element and simulate a click to initiate download
            const link = document.createElement('a');
            link.href = url;
            link.download = "nicolas-resume";
            link.click();

            // Clean up the URL object after download
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    }

    const handleViewClick = () => {
        setShowOverlay(true);
    }

    const handleOverlayClick = () => {
        if (showOverlay) {
            setShowOverlay(false);
        }
    }

    return (
        <a name="experience">
            {showOverlay &&
                <div onClick={handleOverlayClick} className={styles["overlay"]}>
                    <img onClick={() => setShowOverlay(false)} src="exit-icon.png" className={styles["overlay-exit-button"]} />
                    <div className={styles["overlay-ui-holder"]}>
                        <img src="resume-image.png" className={styles["resume-image"]} />
                    </div>
                </div>}
            <div className={styles["overflow-holder"]}>
                <div className={classNames(styles.holder, scrollAnimationList[1] && styles["fade-in"])}>
                    <h2 className={styles.title}>Experience</h2>
                    <div className={styles["highlight-card"]}>
                        <div className={styles["highlight-holder"]}>
                            <h3 className={styles["highlights-main-title"]}>Highlights</h3>
                            <div className={styles["highlight"]}>
                                <h5 className={styles["highlight-title"]}>Junior Software Engineer</h5>
                                <img className={styles["highlight-icon"]} src="preframing-logo.png" />
                                <h6 className={styles["highlight-job-name"]}>Pre Framing Corp</h6>
                                <p className={styles["highlight-date"]}>Mar 2023 - Present</p>
                            </div>
                            <div className={styles["highlight"]}>
                                <h5 className={styles["highlight-title"]}>Software Engineer Intern</h5>
                                <img className={styles["highlight-icon"]} src="pair-pr-logo.png" />
                                <h6 className={styles["highlight-job-name"]}>PAIR Public Relations</h6>
                                <p className={styles["highlight-date"]}>Feb 2023 - Present</p>
                            </div>
                            <div className={styles["highlight"]}>
                                <h5 className={styles["highlight-title"]}>Software Engineer</h5>
                                <img className={styles["highlight-icon"]} src="grantaide-logo.png" />
                                <h6 className={styles["highlight-job-name"]}>GrantAide</h6>
                                <p className={styles["highlight-date"]}>Jan 2023 - Mar 2023</p>
                            </div>
                        </div>
                        <div className={styles["mid-line"]} />
                        <div className={styles["resume-holder"]}>
                            <h3 className={styles["resume-title"]}>Resume</h3>
                            <img className={styles["resume-icon"]} src="resume-icon.png" alt="resume" />
                            <button onClick={handleDownloadClick} className={styles.button}>Download</button>
                            <button onClick={handleViewClick} className={styles.button}>View</button>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.title}>Skills</h2>
                        <div className={styles["skills-holder"]}>
                            <Skill name="CSS3" img="skill-icons/css-icon.png" />
                            <Skill name="HTML5" img="skill-icons/html-icon.png" />
                            <Skill name="JavaScript" img="skill-icons/javascript-icon.png" />
                            <Skill name="TypeScript" img="skill-icons/typescript-icon.png" />
                            <Skill name="React" img="skill-icons/react-icon.png" />
                            <Skill name="NextJS" img="skill-icons/next-icon.png" />
                            <Skill name="MongoDB" img="skill-icons/mongo-icon.png" />
                            <Skill name="NodeJS" img="skill-icons/node-icon.png" />
                            <Skill name="Python" img="skill-icons/python-icon.png" />
                            <Skill name="Git" img="skill-icons/git-icon.png" />
                            <Skill name="Sass" img="skill-icons/sass-icon.png" />
                        </div>
                    </div>
                </div>
            </div>

        </a>
    )
}

export default ExperienceSection;