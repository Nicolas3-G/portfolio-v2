import Link from "next/link";
import styles from "./FixedMenu.module.css";
import classNames from "classnames";

const FixedMenu = ({ currentNavSelection }) => {
    return (
        <div className={styles.holder}>
            <img className={styles.image} src="pfp.jpg" />
            <h1 className={styles.name}>DangSnake</h1>
            <div className={styles["info-card"]}>
                <img src="phone-icon.png" className={styles["info-card-icon"]}/>
                <p>(602) 800-3205</p>
            </div>
            <p className={styles.tagline}>Web Developer | React | NextJS</p>
            <div className={styles.navbar}>
                <div className={styles["nav-element"]}>
                    <a className={classNames(styles["nav-link"], currentNavSelection == "About" && styles["selected"])} href="#about">About</a>
                </div>
                <div className={styles["nav-element"]}>
                    <a className={classNames(styles["nav-link"], currentNavSelection == "Projects" && styles["selected"])} href="#projects">Projects</a>
                </div>
                <div className={styles["nav-element"]}>
                    <a className={classNames(styles["nav-link"], currentNavSelection == "Experience" && styles["selected"])} href="#experience">Experience</a>
                </div>
                <div className={styles["nav-element"]}>
                    <a className={classNames(styles["nav-link"], currentNavSelection == "Contact" && styles["selected"])} href="#contact">Contact</a>
                </div>
            </div>
            <div className={styles["social-bar"]}>
                <a href="https://github.com/Nicolas3-G" target="_blank"><img className={styles["social-icon"]} src="socials/github-icon.png"/></a>
                <a href="https://www.linkedin.com/in/nicolas3/" target="_blank"><img className={styles["social-icon"]} src="socials/linked-icon.png"/></a>
                <a href="https://twitter.com/DangSnake" target="_blank"><img className={styles["social-icon"]} src="socials/twitter-icon.png"/></a>
            </div>
        </div>
    )
}

export default FixedMenu;