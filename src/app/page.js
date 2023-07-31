"use client";

import Image from 'next/image'
import styles from './page.module.css'
import FixedMenu from '@/components/FixedMenu/FixedMenu'
import AboutSection from '@/components/AboutSection/AboutSection'
import ProjectSection from '@/components/ProjectSection/ProjectSection'
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import { useEffect, useState } from 'react'

export default function Home() {
  const [currentNavSelection, setCurrentNavSelection] = useState("About");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    console.log("Handle Scrolled handled", scrollY)
    if (scrollY > 550  && scrollY < 1300 ) {
      setCurrentNavSelection("Projects")
    } else if ( scrollY > 1300 && scrollY < 2300) {
      setCurrentNavSelection("Experience")
    } else if ( scrollY > 2300) {
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

  return (
    <div className={styles.main}>
      <FixedMenu currentNavSelection={currentNavSelection} />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      
    </div>
  )
}
