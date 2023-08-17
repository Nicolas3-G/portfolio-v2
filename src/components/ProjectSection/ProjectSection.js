"use client";
import classNames from "classnames";
import styles from "./ProjectSection.module.css";
import { useState } from "react";

const ProjectSection = ({ scrollAnimationList }) => {
    const [selectedProject, setSelectedProject] = useState();

    const bubbleDataObject = {
        html: {
            title: "HTML",
            style: "html",
            image: "skill-icons/html-icon-green.png"
        },
        css: {
            title: "CSS",
            style: "css",
            image: "skill-icons/css-icon-red.png"
        },
        javascript: {
            title: "JavaScript",
            style: "js",
            image: "skill-icons/javascript-icon-orange.png"
        },
        react: {
            title: "ReactJS",
            style: "react",
            image: "skill-icons/react-icon-blue.png"
        },
        next: {
            title: "NextJS",
            style: "next",
            image: "skill-icons/next-icon.png"
        },
        node: {
            title: "NodeJS",
            style: "node",
            image: "skill-icons/node-icon-purple.png"
        },
    }

    const SkillBubble = ({ title, style, image }) => {
        return (

            <div className={`${styles["bubble-element"]}`}>
                <div className={`${styles["bubble"]} ${styles[style]}`}>
                    <img src={image} className={styles["bubble-image"]}/>
                </div>
                <p className={`${styles["bubble-title"]} ${styles[style]}`}>{title}</p>
            </div>
        )
    }

    const ProjectCard = ({ title, assetPath, id, siteLink, gitLink, quickDesc, skills, fullDesc }) => {
        const [displayOverlay, setDisplayOverlay] = useState(false);

        const imgPath = `project-images/${assetPath}.png`;
        const vidPath = `project-images/${assetPath}-vid.mp4`;

        const handleProjectClick = () => {
            setSelectedProject(id);
        }

        return (
            <div onClick={handleProjectClick} onMouseEnter={() => setDisplayOverlay(true)} onMouseLeave={() => setDisplayOverlay(false)} className={classNames(styles["project-card"], selectedProject == id && styles["selected"], (selectedProject && selectedProject != id) && styles["not-selected"], styles[`selected-${id}`])}>
                {selectedProject != id ?
                    <>
                        <img src={imgPath} className={styles["project-image"]} />
                        <div className={styles["project-bottom-section"]}>
                            <div>
                                <h3 className={styles["project-title"]}>{title}</h3>
                                <p className={styles["project-desc"]}>{quickDesc}</p>
                            </div>
                            <img className={styles["expand-icon"]} src="expand-icon-2.png"/>
                        </div>

                    </> :
                    <>
                        {/* FOCUSED(selected) PROJECT HTML*/}
                        <div className={styles["focused-project-left-section"]}>
                            <h3 className={styles["focused-project-title"]}>{title}</h3>
                            <p className={styles["focused-project-desc"]}>{fullDesc}</p>
                            <div className={styles["tech-section"]}>
                                <p className={styles["tech-section-title"]}>Tech Stack<span className={styles["colon"]}>:</span></p>
                                <div className={styles["bubble-card"]}>
                                    <div className={styles["bubble-holder"]}>
                                        {skills.map((skill, idx) => <SkillBubble key={idx}  {...bubbleDataObject[skill]} />)}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles["focused-project-right-section"]}>
                            <video autoPlay={true} loop className={styles["focused-project-image"]}>
                                <source src={vidPath} type="video/mp4" />
                            </video>
                            {/* <img src={gifPath} className={styles["focused-project-image"]} /> */}
                            <div className={styles["focused-button-bar"]}>
                                <a style={{ textDecoration: "none" }} target="_blank" href={gitLink}><button className={`${styles["focused-button"]} ${styles["two"]}`}><img className={styles["focused-button-icon"]} src="socials/github-icon.png" /><p>Github</p></button></a>
                                <a style={{ textDecoration: "none" }} href={siteLink} target="_blank"><button className={styles["focused-button"]}><img className={styles["focused-button-icon"]} src="live-site-icon.png" /><p>Live Site</p></button></a>

                            </div>
                        </div>


                    </>}

            </div>
        )
    }

    const focusedValue = (id) => {
        if (!selectedProject) return true;
        if (selectedProject == id) return true;
        return false;
    }

    // Project descriptions
    const cryptoSecureDesc = "Crypto Secure is a cutting-edge multi-page web application built using Next.js, React, and HTML that empowers users to manage their cryptocurrency holdings with confidence and security. Whether you're a seasoned crypto investor or just getting started, Crypto Secure provides a user-friendly platform to track, monitor, and analyze your digital assets in real-time.";
    const NextriDesc = "Nextri: A modern e-commerce website powered by Next.js, React, and HTML. Elevate your shopping with a seamless user experience. Explore and purchase diverse clothing items from various brands. Your go-to destination for effortless style. ";
    const applicantDesc = "Applicant.io is an engaging browser-based simulation game that empowers users to craft their own success by constructing businesses from scratch. Developed using Next.js, React, HTML, and JavaScript, this project draws inspiration from a cherished childhood game. A labor of passion, it remains an ongoing endeavor, driven by a commitment to delivering a captivating and nostalgic experience.";
    const devbotDesc = "DevBot Chat is a group of interactive chatbots at your service. Comprised of three distinct chatbots, each tailored for a unique role, this project has granted me insights into harnessing reusable React components effectively. My future roadmap for this project includes the integration of specialized LLM AI Models to serve users flexible and in depth answers to all their questions!";

    return (
        <a name="projects">
            <div className={classNames(styles.holder, scrollAnimationList[0] && styles["fade-in"])}>
                <h2 className={styles.title}>Featured Projects</h2>
                <div className={classNames(styles["card-holder"], selectedProject && styles[`focused-view-${selectedProject}`])}>
                    {/* Focused value checks that there is no project selected or if there is which one should be displayed */}
                    {/* ID should be set to order it appears in grid, used for click handling */}
                    <ProjectCard skills={["html", "css", "javascript", "next", "react"]} title="CryptoSecure" fullDesc={cryptoSecureDesc} quickDesc="Streamlined crypto banking platform" assetPath="crypto-secure" siteLink="https://crypto-secure.vercel.app/" gitLink="https://github.com/Nicolas3-G/CryptoSecure" id={1} />
                    <ProjectCard skills={["html", "css", "javascript", "next", "react"]} title="Nextri" fullDesc={NextriDesc} quickDesc="User-friendly clothing e-commerce site" assetPath="nextri"  id={2} siteLink="https://nextri.vercel.app/" gitLink="https://github.com/Nicolas3-G/Nextri" />
                    <ProjectCard skills={["html", "css", "javascript", "react"]} title="Applicant.io" fullDesc={applicantDesc} quickDesc="Browser game simulating real-life decisions" assetPath="applicant-io" siteLink="https://applicant-io.vercel.app/" gitLink="https://github.com/Nicolas3-G/sim-game" id={3} />
                    <ProjectCard skills={["html", "css", "javascript", "react"]} title="DevBot Chat" fullDesc={devbotDesc} quickDesc="A trio of interactive chatbots at your service" assetPath="devbot" siteLink="https://nicolas3-g.github.io/devbot/" gitLink="https://github.com/Nicolas3-G/devbot" id={4} />
                    {selectedProject && <button className={styles["close-button"]} onClick={() => setSelectedProject(null)}><img className={styles["exit-icon"]} src="exit-icon.png" /></button>}
                </div>
            </div>
        </a>
    )
}

export default ProjectSection;