import { useRef, useState } from "react";
import styles from "./ContactSection.module.css";
import ContactForm from "./components/ContactForm";



const ContactSection = ({ runEmailAnimation }) => {

    const SocialLink = ({ link, img }) => {
        return (
            <div className={styles["social-item"]}>
                <img src={img} className={styles["social-icon"]} />
                <a style={{fontWeight: "bold", fontSize: "14px"}} href="#">{link}</a>
            </div>
        )
    }

    const SocialCard = () => {
        return (
            <div className={styles["social-card"]}>
                <h4 style={{ textAlign: "center", margin: "15px" }}>Socials</h4>
                <SocialLink link="Nicolas3" img="socials/linked-black-icon.png" />
                <SocialLink link="Nicolas3-G" img="socials/github-black-icon.png" />
                <SocialLink link="DangSnake" img="socials/twitter-black-icon.png" />
                <SocialLink link="Nicguimont@gmail.com" img="socials/email-icon.png" />
                
            </div>
        )
    }


    return (
        <>
            <a name="contact" />
            <div className={styles.holder}>
                <h2 className={styles.title}>Contact</h2>
                <div className={styles.grid}>
                    <ContactForm runEmailAnimation={runEmailAnimation} />
                    <SocialCard />
                    <div className={styles["third-card"]}>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactSection;