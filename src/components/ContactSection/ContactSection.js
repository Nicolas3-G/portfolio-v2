import { useRef, useState } from "react";
import styles from "./ContactSection.module.css";
import ContactForm from "./components/ContactForm";
import classNames from "classnames";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";

const ContactSection = ({ runEmailAnimation, scrollAnimationList }) => {
  const SocialLink = ({ link, img, href = "#" }) => {
    return (
      <a className={styles["social-item"]} href={href}>
        <img src={img} className={styles["social-icon"]} />
        {/* <a className={styles["social-link-text"]} href={href}>
          {link}
        </a> */}
      </a>
    );
  };

  const ContactBar = ({ icon, href, text }) => {
    return (
      <a className={styles["contact-bar"]} href={href}>
        {icon}
        <p className={styles["contact-bar-text"]}>{text}</p>
      </a>
    );
  };

  const TextAndSocialsSection = () => {
    return (
      <div className={styles["text-and-socials-section"]}>
        <div>
          <h4 className={styles["text-and-socials-section-title"]}>
            Write me a message 👋
          </h4>
          <p className={styles["text-and-socials-section-subtitle"]}>
            Tell me about your project!
          </p>
          <p className={styles["text-and-socials-section-description"]}>
            Send me a email or use the form here to get in touch
          </p>
          <div className={styles["desktop-contact-bars-section"]}>
            <div className={styles["contact-bars-container"]}>
              <ContactBar
                icon={<MdOutlineEmail size={25} color="black" />}
                text="nicguimont@gmail.com"
                href="mailto:nicguimont@gmail.com"
              />
              <ContactBar
                icon={<IoMdPhonePortrait size={25} color="black" />}
                text="(602) 800-3205"
                href="tel:(602) 800-3205"
              />
            </div>
          </div>
        </div>
        <div className={styles["desktop-socials-section"]}>
          <p className={styles["text-and-socials-section-description"]}>
            You can also find me on these platforms:
          </p>
          <div className={styles["social-links-container"]}>
            <SocialLink
              link="Nicolas3"
              img="socials/linked-black-icon.png"
              href="https://www.linkedin.com/in/nicolas3/"
            />
            <SocialLink
              link="Nicolas3-G"
              img="socials/github-black-icon.png"
              href="https://github.com/Nicolas3-G"
            />
            <SocialLink link="DangSnake" img="socials/twitter-black-icon.png" />
          </div>
        </div>
      </div>
    );
  };

  const MobileContactSection = () => {
    return (
      <div className={styles["mobile-contact-section"]}>
        <div className={styles["contact-bars-container"]}>
          <ContactBar
            icon={<MdOutlineEmail size={25} color="black" />}
            text="nicguimont@gmail.com"
            href="mailto:nicguimont@gmail.com"
          />
          <ContactBar
            icon={<IoMdPhonePortrait size={25} color="black" />}
            text="(602) 800-3205"
            href="tel:(602) 800-3205"
          />
        </div>
        <div>
          <p className={styles["text-and-socials-section-description"]}>
            You can also find me on these platforms:
          </p>
          <div className={styles["social-links-container"]}>
            <SocialLink
              link="Nicolas3"
              img="socials/linked-black-icon.png"
              href="https://www.linkedin.com/in/nicolas3/"
            />
            <SocialLink
              link="Nicolas3-G"
              img="socials/github-black-icon.png"
              href="https://github.com/Nicolas3-G"
            />
            <SocialLink link="DangSnake" img="socials/twitter-black-icon.png" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <a name="contact" />
      <div className={styles["overflow-holder"]}>
        <div
          className={classNames(
            styles.holder,
            scrollAnimationList[2] && styles["fade-in"]
          )}
        >
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.cardContainer}>
            <TextAndSocialsSection />
            <ContactForm runEmailAnimation={runEmailAnimation} />
            <MobileContactSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
