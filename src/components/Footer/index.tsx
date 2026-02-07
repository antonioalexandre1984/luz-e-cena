import styles from './Footer.module.css'
import {FooterLogo} from './components/FooterLogo'
import {FooterInfo} from './components/FooterInfo'
import {FooterInstitucional} from './components/FooterInstitucional'
import { FooterSocial } from './components/FooterSocial'
import { FooterDevelopedBy } from './components/FooterDevelopedBy'

export const Footer = () => {
  return (
    <>
    <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
        <FooterLogo/>
        <FooterInfo/>
        <FooterInstitucional/>
        <FooterSocial/>
        </div>
    </footer>
       <FooterDevelopedBy/>
    </>
  )
}
