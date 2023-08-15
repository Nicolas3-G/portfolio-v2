"use client";

import Image from 'next/image'
import styles from './page.module.css'
import FixedMenu from '@/components/FixedMenu/FixedMenu'
import AboutSection from '@/components/AboutSection/AboutSection'
import ProjectSection from '@/components/ProjectSection/ProjectSection'
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import { useEffect, useState } from 'react'
import classNames from 'classnames';
import EmailAnimation from '@/components/EmailAnimation/EmailAnimation';

export default function Home() {
  const [currentNavSelection, setCurrentNavSelection] = useState("About");
  // Handles email card animation
  const [playAnimation, setPlayAnimation] = useState(null);
  const [scrollAnimationList, setScrollAnimationList] = useState([false, false, false]);

  useEffect(() => {console.log("LOGGING PLAY ANIMATION (email):", playAnimation)}, [playAnimation])

  const runEmailAnimation = (type) => {
    setPlayAnimation(type);
    setTimeout(() => { setPlayAnimation(null) }, 10000)
  }

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // playAnimation && setPlayAnimation(false);
    if (scrollY > 500 && scrollY < 1300) {
      setCurrentNavSelection("Projects")
    } else if (scrollY >= 1300 && scrollY < 2300) {
      setCurrentNavSelection("Experience")
    } else if (scrollY >= 2300) {
      setCurrentNavSelection("Contact")
    } else {
      setCurrentNavSelection("About")
    }
    // Handle Scroll animations
    // Updates state list that tracks which animation to fire and which has fired
    if (scrollY > 100 && !scrollAnimationList[0]) {
      setScrollAnimationList((prev) => ([true, prev[1], prev[2]]))
    } 
    if (scrollY > 1100 && !scrollAnimationList[1]) {
      setScrollAnimationList((prev) => ([prev[0], true, prev[2]]))
    }
    if (scrollY > 1800 && !scrollAnimationList[2]) {
      setScrollAnimationList((prev) => ([prev[0], prev[1], true]))
    }
  }

  useEffect(() => {console.log("Logging animation list: ", scrollAnimationList)}, [scrollAnimationList])


  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })


  return (
    <div className={styles.main}>
      <FixedMenu currentNavSelection={currentNavSelection} />
      <AboutSection />
      <ProjectSection scrollAnimationList={scrollAnimationList} />
      <ExperienceSection scrollAnimationList={scrollAnimationList} />
      <ContactSection runEmailAnimation={runEmailAnimation} scrollAnimationList={scrollAnimationList}/>
      {playAnimation && <EmailAnimation playAnimation={playAnimation} setPlayAnimation={setPlayAnimation}/>}
    </div>
  )
}
