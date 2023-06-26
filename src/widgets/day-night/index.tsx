import React from 'react';
import Image from 'next/image'
import styles from './styles.module.scss'
import NightBackground from '@/assets/night.png'
import DayBackground from '@/assets/day.png'

export function DayNight() {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(1080)
  const progress = Math.max(0, Math.min(1, (scrollPosition - windowHeight) / (windowHeight*2)))

  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [setScrollPosition])

  React.useEffect(() => {
    if(typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
    }
  }, [typeof window])

  return (
    <section className={styles.dayNight} style={{ '--scroll-position': progress }}>
      <div className={styles.parallaxBackground}>
        <Image src={NightBackground} className={styles.night} alt='' quality={100} fill priority />
        <Image src={DayBackground} className={styles.day} alt='' quality={100} fill priority />
      </div>
      <div className={styles.labels}>
        <div className={styles.nightLabel}>
          Во тьме
          <span>Ночной</span>
        </div>
        <div className={styles.dayLabel}>
          При свете
          <span>Дня</span>
        </div>
      </div>
    </section>
  )
}