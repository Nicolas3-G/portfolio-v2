"use client";

import { useRef } from "react";
import styles from "./ContactSection.module.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rwh0k8o', 'template_fbnqjwj', form.current, '-8Zb6WZ78zgtK80L3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={styles["contact-form"]}>
            <h4>Write a message</h4>
            <div className={styles["input-holder"]}>
                <label>Your Name</label>
                <input name="user_name" type="text"></input>
            </div>
            <div className={styles["input-holder"]}>
                <label>Your Email</label>
                <input name="user_email" type="email"></input>
            </div>
            <div className={styles["input-holder"]}>
                <label>Your Message</label>
                <textarea name="message"></textarea>
            </div>
            <input type="submit" value="Send" />
        </form>
    )
}

const ContactSection = () => {
    return (
        <div className={styles.holder}>
            <ContactForm />

        </div>
    )
}

export default ContactSection;