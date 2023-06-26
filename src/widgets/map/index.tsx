import Image from 'next/image'
import styles from './styles.module.scss'
import MapImage from '@/assets/map.png'

export function Map({ children }: React.PropsWithChildren) {
  return (
    <section className={styles.map}>
      <Image src={MapImage} fill alt='' quality={100} priority />
      <div className={styles.label}>Мы находимся на координатах X: 168, Z: 4256</div>
    </section>
  )
}