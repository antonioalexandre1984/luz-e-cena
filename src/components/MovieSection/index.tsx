
import { FaSearch } from 'react-icons/fa'
import { Button } from '../Button'
import { InputText } from '../InputText'
import styles from './MovieSection.module.css'
import { FieldSet } from '../FieldSet'
/* import { movies } from './movies' */
import { MovieList } from '../MovieList'
import { useEffect, useState } from 'react'
import type { CardMovieProps } from '../../types'
import { getMovies } from '../../api'


export const MovieSection = () => {

  const [movies, setMovies] = useState<CardMovieProps[]>([])

  /* Exemplo com uso de funçãos assíncronas
  async function getMovies() {
    const response = await fetch('http://localhost:3001/movies')
    const data = await response.json()
    setMovies(data)
  } */

    const fetchMovies = async () => {
      try{
        const moviesData = await getMovies();
        setMovies(moviesData);
      }catch(err){
          console.error("Erro ao buscar o filme" + err)
      }
    };


    useEffect(() => {
      const fetchData = async () => {
        await fetchMovies();
      };
      fetchData();
    }, []);

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
