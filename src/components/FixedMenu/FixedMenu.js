import Link from "next/link";
import styles from "./FixedMenu.module.css";

const FixedMenu = ({ currentNavSelection }) => {
    return (
        <div className={styles.holder}>
            <img className={styles.image} src="pfp.png" />
            <h1 className={styles.name}>DangSnake</h1>
            <p className={styles.tagline}>Tagline</p>
            <div className={styles.navbar}>
                <div className={styles["nav-element"]}>
                    {currentNavSelection == "About" && <p>***</p>}
                    <a href="#about">About</a>
                </div>
                <div className={styles["nav-element"]}>
                    {currentNavSelection == "Projects" && <p>***</p>}
                    <a href="#projects">Projects</a>
                </div>
                <div className={styles["nav-element"]}>
                    {currentNavSelection == "Experience" && <p>***</p>}
                    <a href="#experience">Experience</a>
                </div>
                <div className={styles["nav-element"]}>
                    {currentNavSelection == "Contact" && <p>***</p>}
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default FixedMenu;