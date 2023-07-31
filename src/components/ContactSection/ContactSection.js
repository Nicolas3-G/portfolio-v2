"use client";

import { useRef } from "react";
import styles from "./ContactSection.module.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();


    const sendEmail = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/email", {
            method: "POST",
            body: JSON.stringify({ inputForm: form.current })
        })
        const data = await response.json();
        console.log("LOGGING RESPONSE", data);

    };

    return (
        <form ref={form} onSubmit={sendEmail} className={styles["contact-form"]}>
            <div className={styles["form-text-holder"]}>
                <h3>Write a message 👋</h3>
                <div className={styles["input-holder"]}>
                    <label className={styles["input-label"]}>Your Name</label>
                    <input className={styles["input-field"]} name="user_name" type="text"></input>
                </div>
                <div className={styles["input-holder"]}>
                    <label className={styles["input-label"]}>Your Email</label>
                    <input className={styles["input-field"]} name="user_email" type="email"></input>
                </div>
                <div className={styles["input-holder"]}>
                    <label className={styles["input-label"]}>Your Message</label>
                    <textarea className={`${styles["input-field"]} ${styles["text-field"]}`} name="message"></textarea>
                </div>
                <input className={styles.button} type="submit" value="Send" />
            </div>

        </form>
    )
}

const ContactSection = () => {
    const SocialLink = ({ link, img }) => {
        return (
            <div className={styles["social-item"]}>
                <img src={img} className={styles["social-icon"]} />
                <a href="#">{link}</a>
            </div>
        )
    }

    const SocialCard = () => {
        return (
            <div className={styles["social-card"]}>
                <h4 style={{ textAlign: "center" }}>Socials</h4>
                <SocialLink link="Linkinedinlink.com" img="preframing-logo.png" />
                <SocialLink link="Anotherlink.com" img="preframing-logo.png" />
                <SocialLink link="Anotherlink.com" img="preframing-logo.png" />
            </div>
        )
    }

    return (
        <>
            <a name="contact" />
            <div className={styles.holder}>
                <h2 className={styles.title}>Contact</h2>
                <div className={styles.grid}>
                    <ContactForm />
                    <SocialCard />
                    <div className={styles["third-card"]}>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactSection;