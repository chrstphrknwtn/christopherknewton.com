import type { Metadata } from 'next'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About'
}

const AboutPage = () => (
  <section className={styles.pageContainer}>
    <p>This website is a place for me to think about pictures.</p>
  </section>
)

export default AboutPage
