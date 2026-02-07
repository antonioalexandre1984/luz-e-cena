import { InputText } from '../InputText'
import { Button } from '../Button'
import styles from './NewsLetter.module.css'

export const NewsLetter = () => {
  return (
<section className={styles.newsletter}>
    <h2 className={styles.titulo}>Inscreva-se para receber nossas novidades e ganhar descontos!</h2>
    <form className={styles.form}>
        <fieldset>
            <InputText
                type="email"
                placeholder="Digite seu e-mail"
                required
            />
            </fieldset>
            <Button
            variant="primary"
            type="submit">Inscrever</Button>    
    </form> 
</section>
  )
}
