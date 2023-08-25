import styles from "./AboutSection.module.css";

const AboutSection = () => {
    return (
        <>
            <a name="about" />
            <div className={styles.holder}>
                <div className={styles["text-holder"]}>
                    <h2 className={styles["intro-text"]}>Hi I&apos;m <span className={styles.name}>Nicolas</span> 👋</h2>
                    <h1 className={styles["main-text"]}>Building A Digital Future Through Code</h1>
                    <p className={styles["desc-text"]}>A <b>Web Developer</b> in San Francisco. Specializing in Responsive Web Design, <b>React</b>, and <b>JavaScript</b></p>
                    <a href="#contact">
                        <button className={styles.button}>Connect</button>
                    </a>
                </div>
            </div>
        </>


    )
};

export default AboutSection;