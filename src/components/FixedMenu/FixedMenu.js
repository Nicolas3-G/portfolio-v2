import Link from "next/link";
import styles from "./FixedMenu.module.css";

const FixedMenu = () => {
    return (
        <div className={styles.holder}>
            <img className={styles.image} src="pfp.png"/>
            <h1 className={styles.name}>DangSnake</h1>
            <p className={styles.tagline}>Tagline</p>
            <div className={styles.navbar}>
                <div className={styles["nav-element"]}>
                    <label>About</label>
                </div>
                <div className={styles["nav-element"]}>
                    <label>Projects</label>
                </div>
                <div className={styles["nav-element"]}>
                    <label>Experience</label>
                </div>
                <div className={styles["nav-element"]}>
                    <label>Contact</label>
                </div>

            </div>
        </div>
    )
}

export default FixedMenu;