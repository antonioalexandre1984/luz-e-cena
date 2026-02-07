import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiFillTwitterSquare } from "react-icons/ai"
import styles from '../Footer.module.css'

export const FooterSocial = () => {
  return (
    <div className={styles.redes}>
      <h4 className="">Siga nossas redes</h4>
      <span className={styles.icones}>
        <AiFillInstagram/>
        <AiFillFacebook/>
        <AiFillLinkedin/>
        <AiFillYoutube/>
        <AiFillTwitterSquare/>
        </span>
    </div>
  )
}
