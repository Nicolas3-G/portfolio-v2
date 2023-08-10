"use client";

import Image from 'next/image'
import styles from './page.module.css'
import FixedMenu from '@/components/FixedMenu/FixedMenu'
import AboutSection from '@/components/AboutSection/AboutSection'
import ProjectSection from '@/components/ProjectSection/ProjectSection'
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import { useEffect, useState } from 'react'
import Form from '@/components/Form';
import classNames from 'classnames';

export default function Home() {
  const [currentNavSelection, setCurrentNavSelection] = useState("About");
  const [playAnimation, setPlayAnimation] = useState();

  const runEmailAnimation = (type) => {
      setPlayAnimation(type);
      setTimeout(() => {setPlayAnimation()}, 10000)
  }

  const handleScroll = () => {
    const scrollY = window.scrollY;
    playAnimation && setPlayAnimation(false);
    if (scrollY > 550 && scrollY < 1300) {
      setCurrentNavSelection("Projects")
    } else if (scrollY > 1300 && scrollY < 2300) {
      setCurrentNavSelection("Experience")
    } else if (scrollY > 2300) {
      setCurrentNavSelection("Contact")
    } else {
      setCurrentNavSelection("About")
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const EmailAnimation = () => {
    return (
        <div className={styles["animation-card"]}>
            <img className={styles["confirm-icon"]} src={playAnimation == "success" ? "confirm-icon.png":"error-icon.png"} />
            <p>{playAnimation == "success" ? "Message Sent 👍": "Failed to send!"}</p>
            <div className={classNames(styles["progress-bar"], playAnimation == "error" && styles["error"])} />
            <img onClick={() => setPlayAnimation(false)} src={"exit-icon.png"} className={styles["animation-exit-icon"]}/>
        </div>
    )
}

  return (
    <div className={styles.main}>
      <FixedMenu currentNavSelection={currentNavSelection} />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection runEmailAnimation={runEmailAnimation}/>
      {playAnimation && <EmailAnimation />}

    </div>
  )
}
