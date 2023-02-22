import { useRouter } from 'next/router'
import styles from 'styles/reload.module.css'

const ReloadPage = () => {
  const router = useRouter()

  function reload () {
    router.reload()
  }
  return (
    <div className={styles.outer}>
      <button onClick={reload} className={`${styles.btn} ${styles.text}`}>
        Try Click Me!!!!!!!!!!!!!!!!!!
      </button>
    </div>
  )
}
export default ReloadPage
