import styles from "./AboutSection.module.css";

const AboutSection = () => {
    return (
        <a name="about">
            <div className={styles.holder}>
                <div className={styles["text-holder"]}>
                    <h2 className={styles["intro-text"]}>Hi I'm <span className={styles.name}>DangSnake</span> 👋</h2>
                    <h1 className={styles["main-text"]}>Building A Digital Future through Code</h1>
                    <p className={styles["desc-text"]}>A <b>Web Developer</b> in San Francisco. Specilizing in Responsive Web Design, <b>React</b>, and <b>JavaScript</b></p>
                    <button className={styles.button}>Connect</button>
                </div>
            </div>
        </a>

    )
};

export default AboutSection;