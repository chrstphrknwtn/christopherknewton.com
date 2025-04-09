import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About'
}

const AboutPage = () => (
  <>
    <Header />
    <div className={styles.container}>
      <section className={styles.pageContainer}>
        <p>This website is a place for me to think about pictures.</p>
      </section>
    </div>
    <Footer />
  </>
)

export default AboutPage
