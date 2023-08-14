import { useRef, useState } from "react";
import styles from "./ContactSection.module.css";
import ContactForm from "./components/ContactForm";



const ContactSection = ({ runEmailAnimation }) => {

    const SocialLink = ({ link, img }) => {
        return (
            <div className={styles["social-item"]}>
                <img src={img} className={styles["social-icon"]} />
                <a style={{ fontWeight: "bold", fontSize: "14px" }} href="#">{link}</a>
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

    const TweetCard = () => {
        return (
            <div className={styles["tweet-card"]}>
                <h4 style={{ textAlign: "center", margin: "15px" }}>Latest Tweets</h4>
                <div className={styles["tweet-feed"]}>
                    <Tweet date="13 Aug" text="Day #28 of #100DaysOfCode Today I did some work stuff and also got to work on my portfolio again! I added some gifs to each project and connected all the links, still experimenting with the tech section but getting there 💪"/>
                    <Tweet date="14 Aug" text="Day 27 of #100DaysOfCode Today worked on adding some animations and style updates ✅ Also got some work done on the project section and resume download/view functionality 👍 Getting close to wrapping it up, hopefully a couple more days of work! Check it out:"/>
                    <Tweet date="15 Aug" text="Day 27 of #100DaysOfCode Today worked on adding some animations and style updates ✅ Also got some work done on the project section and resume download/view functionality 👍 Getting close to wrapping it up, hopefully a couple more days of work! Check it out:" />
                    <Tweet date="16 Aug" text="Day 27 of #100DaysOfCode Today worked on adding some animations and style updates ✅ Also got some work done on the project section and resume download/view functionality 👍 Getting close to wrapping it up, hopefully a couple more days of work! Check it out:" />
                    <Tweet date="17 Aug" text="Day 27 of #100DaysOfCode Today worked on adding some animations and style updates ✅ Also got some work done on the project section and resume download/view functionality 👍 Getting close to wrapping it up, hopefully a couple more days of work! Check it out:" />
                </div>
            </div>
        )

    }

    const Tweet = ({ date, text }) => {
        return (
            <div className={styles["tweet"]}>
                <img src="twitter-pfp.jpg" className={styles["pfp-icon"]} />
                <div className={styles["tweet-content"]}>
                    <div className={styles["tweet-top-row"]}>
                        <h5 style={{ margin: "0", fontSize: "12px" }}>DangSnake</h5>
                        <p className={styles["user-at"]}>@dangsn...</p>
                        <p className={styles["time-text"]}>· {date}</p>
                    </div>
                    <p className={styles["tweet-text"]}>{text}</p>

                </div>

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
                    <TweetCard />
                </div>

            </div>
        </>
    )
}

export default ContactSection;