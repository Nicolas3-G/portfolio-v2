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

export default function Home() {
  const [currentNavSelection, setCurrentNavSelection] = useState("About");
  const [playAnimation, setPlayAnimation] = useState(false);

  const runEmailAnimation = () => {
      setPlayAnimation(true);
      setTimeout(() => {setPlayAnimation(false)}, 10000)
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
            <img className={styles["confirm-icon"]}src="confirm-icon.png" />
            <p>Message Sent 👍</p>
            <div className={styles["progress-bar"]}/>
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
