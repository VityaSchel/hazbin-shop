import React from 'react';
import Image from 'next/image'
import styles from './styles.module.scss'
import HeroParallaxBackground from '@/assets/hero.png'

export function Hero() {
  const [scrollPosition, setScrollPosition] = React.useState(0)

  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [setScrollPosition])

  return (
    <section className={styles.hero} style={{ '--scroll-position': Math.min(scrollPosition/400, 1) }}>
      <div className={styles.parallaxBackground}>
        <Image src={HeroParallaxBackground} className={styles.parallaxBackgroundImage} alt='' quality={100} fill />
      </div>
      <h1 className={styles.headline}>Hazbin Shop</h1>
    </section>
  )
}