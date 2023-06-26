import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import FromStreetImage from '@/assets/shop-from-street.png'

export function FromStreet({ children }: React.PropsWithChildren) {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(1080)
  const progress = Math.max(0, Math.min(1, (scrollPosition - windowHeight*2.25) / (windowHeight * 0.25)))

  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [setScrollPosition])

  // React.useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setWindowHeight(window.innerHeight)
  //   }
  // }, [typeof window])

  return (
    <section className={styles.fromStreet} style={{ '--scroll-position': progress }}>
      <Image src={FromStreetImage} fill alt='' priority />
      <div className={styles.labels}>
        <h2>Hazbin Shop ждет</h2>
        <h3>ТЕБЯ</h3>
      </div>
    </section>
  )
}