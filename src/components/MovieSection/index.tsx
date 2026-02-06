
import { FaSearch } from 'react-icons/fa'
import { Button } from '../Button'
import { InputText } from '../InputText'
import styles from './MovieSection.module.css'
import { FieldSet } from '../FieldSet'
import { movies } from './movies'
import { MovieList } from '../MovieList'


export const MovieSection = () => {
  return (
    <main>
      <section className={styles.container}>
        <FieldSet variant="primary">
        <InputText placeholder="Pesquisar filmes...."/>
        <Button variant="icon">
            <FaSearch/>
        </Button>
        </FieldSet>
        <h1 className={styles.titulo}>Em cartaz</h1>
            <MovieList movies={movies}/>
      </section>
    </main>
  )
}
