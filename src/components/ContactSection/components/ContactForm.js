import { useRef, useState } from "react";
import styles from "./ContactForm.module.css"
import emailjs from '@emailjs/browser';
import { emailKey } from "@/app/actions";


const ContactForm = ({ runEmailAnimation }) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        const key = await emailKey();
        emailjs.sendForm(key, 'template_fbnqjwj', e.target, '-8Zb6WZ78zgtK80L3')
            .then((result) => {
                console.log("Success Email")
                runEmailAnimation();
            }, (error) => {
                console.log("Email ERROR!", error)
            });
        setUserName("");
        setUserEmail("")
        setUserMessage("");
    }


    return (
        <form id="myForm" onSubmit={(e) => sendEmail(e)} className={styles["contact-form"]}>
            <div className={styles["form-text-holder"]}>
                <h3>Write a message 👋</h3>
                <div className={styles["input-holder"]}>
                    <label className={styles["input-label"]}>Your Name</label>
                    <input onChange={(e) => setUserName(e.target.value)} value={userName} className={styles["input-field"]} name="user_name" type="text"></input>
                </div>
                <div className={styles["input-holder"]}>
                    <label className={styles["input-label"]}>Your Email</label>
                    <input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} className={styles["input-field"]} name="user_email" type="email"></input>
                </div>
                <div className={styles["input-holder"]}>
                    <label className={styles["input-label"]}>Your Message</label>
                    <textarea onChange={(e) => setUserMessage(e.target.value)} value={userMessage} className={`${styles["input-field"]} ${styles["text-field"]}`} name="message"></textarea>
                </div>
                <input className={styles.button} type="submit" value="Send" />
            </div>

        </form>
    )
}

export default ContactForm;