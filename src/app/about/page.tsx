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
    <section className={styles.container}>
      <p>This website is a place for me to think about pictures.</p>
    </section>
    <Footer />
  </>
)

export default AboutPage
