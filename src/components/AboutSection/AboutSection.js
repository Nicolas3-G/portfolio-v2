import styles from "./AboutSection.module.css";

const AboutSection = () => { 
    return (
        <div className={styles.holder}>
            <div className={styles["text-holder"]}>
                <h2>Hi I'm Nicolas</h2>
                <h1>Building Digital Future through Code</h1>
                <p>Desc Text</p>
                <button>Connect</button>
            </div>
        </div>
    )
};

export default AboutSection;