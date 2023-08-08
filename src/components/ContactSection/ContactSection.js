import { useRef } from "react";
import styles from "./ContactSection.module.css";
import emailjs from '@emailjs/browser';
import { sendEmailAction } from "@/app/actions";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log("SENDING EMAIL>>>");
        emailjs.sendForm(process.env.EMAIL_SERVICE_KEY, 'template_fbnqjwj', e.target, '-8Zb6WZ78zgtK80L3')
        .then((result) => {
            console.log(result.text);
            responseText = result.text;
        }, (error) => {
            console.log(error.text);
            responseText = error.text;
        });


        // const response = await fetch("/api/email", {
        //     method: "POST",
        //     body: jsonData
        // })
        // const data = await response.json();
        // console.log("LOGGING RESPONSE", data);

    };

    return (
        <form ref={form} action={() => sendEmailAction(form.current)} onSubmit={(e) => e.preventDefault()}className={styles["contact-form"]}>
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