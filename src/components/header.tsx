import Link from 'next/link'
import styles from './header.module.css'

const navigationLinks = [
  {
    route: '/pictures',
    label: 'pictures'
  },
  {
    route: '/about',
    label: 'about'
  }
]

const Header = () => (
  <header className={styles.header}>
    <h1>Christopher Newton</h1>
    <ul>
      {navigationLinks.map(link => (
        <li key={link.route}>
          <Link href={link.route}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </header>
)

export default Header
