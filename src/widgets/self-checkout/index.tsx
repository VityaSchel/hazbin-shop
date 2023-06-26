import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import SelfCheckoutImage from '@/assets/self-checkout.png'

export function SelfCheckout({ children }: React.PropsWithChildren) {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(1080)
  const progress = Math.max(0, Math.min(1, (scrollPosition - windowHeight * 5) / (windowHeight * 1)))

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
    <section className={styles.selfCheckout} style={{ '--scroll-position': progress }}>
      <div className={styles.selfCheckoutImage}>
        <Image src={SelfCheckoutImage} fill alt='' />
      </div>
      <p className={styles.paragraph}>
        В любое время суток<br></br>рассчитайтесь в <b>кассе самообслуживания</b>
      </p>
    </section>
  )
}