import copyright from 'copyright'
import styles from './footer.module.css'

const copyrightString = copyright({
  name: 'Christopher Newton',
  short: true,
  startYear: 1981
})

const Footer = () => (
  <footer className={styles.footer}>
    <p>{copyrightString}</p>
  </footer>
)

export default Footer
