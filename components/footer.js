import Link from 'next/link'
import styles from 'styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>
        API used is<span> </span>
        <Link href='https://randomfox.ca/floof/' className={styles.link}>
          http://randomfox.ca/floof/
        </Link>
      </p>
    </footer>
  )
}
export default Footer
