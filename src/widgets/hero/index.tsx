import React from 'react';
import Image from 'next/image'
import styles from './styles.module.scss'
import HeroParallaxBackground from '@/assets/hero.png'

export function Hero() {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(1080)
  const progress = Math.max(0, Math.min(1, scrollPosition / (windowHeight * 0.53)))

  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [setScrollPosition])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
    }
  }, [typeof window])

  return (
    <section className={styles.hero} style={{ '--scroll-position': progress }}>
      <div className={styles.parallaxBackground}>
        <Image src={HeroParallaxBackground} className={styles.parallaxBackgroundImage} alt='' quality={100} fill priority />
      </div>
      <h1 className={styles.headline}>Hazbin Shop</h1>
    </section>
  )
}