import styles from '../Footer.module.css'
import { Logo } from '../../Logo/Logo'
import logo from '../../../../public/Logo e Favicon/Logo.svg' 

export const FooterLogo = () => {
  return (
    <div className={styles.logo}>
        <Logo src={logo} alt=""/>
        <p className={styles.paragrafo}>Onde a realidade encontra a fantasia!</p>
    </div>
  )
}
