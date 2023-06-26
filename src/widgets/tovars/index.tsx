import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import TovarsImage from '@/assets/shop.png'

export function Tovars({ children }: React.PropsWithChildren) {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(1080)
  const progress = Math.max(0, Math.min(1, (scrollPosition - windowHeight * 3.35) / (windowHeight * 0.1)))

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
    <section className={styles.tovars} style={{ '--scroll-position': progress }}>
      <Image src={TovarsImage} fill alt='' />
      <div className={styles.paragraph}>
        В самом модном магазине города demovio вы найдете
        <span className={styles.food}>еду в ассортименте,</span>
        <span className={styles.resources}>ресурсы для крафта,</span>
        <span className={styles.pets}>все для ваших питомцев,</span>
      </div>
      <div className={styles.additional}>
        <h1>Только у нас</h1>
        <p>Книги на Защиту 4, Силу 3, Эффективность 3, Прочность 3, и другие книги с самым высоким уровнем зачарования.</p>
      </div>
    </section>
  )
}