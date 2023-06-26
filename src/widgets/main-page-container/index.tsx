import styles from './styles.module.scss'

export function MainPageContainer({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}