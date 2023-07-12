import Image from 'next/image'
import styles from './page.module.css'
import FixedMenu from '@/components/FixedMenu/FixedMenu'
import AboutSection from '@/components/AboutSection/AboutSection'

export default function Home() {
  return (
    <div className={styles.main}>
      <FixedMenu />
      <AboutSection />

      
    </div>
  )
}
