import { FaSearch } from 'react-icons/fa'
import { Button } from '../Button'
import { InputText } from '../InputText'
import styles from './MovieSection.module.css'
import { FieldSet } from '../FieldSet'
/* import { movies } from './movies' */
import { MovieList } from '../MovieList'
import {useFetchMovies} from '../hooks/useFetchMovies'
import { useFilterMovies } from '../hooks/useFilterMovies'

export const MovieSection = () => {

  const {movies,error,loading} = useFetchMovies();
  const {handleSearch,searchTerm,setSearchTerm,filteredMovies} = useFilterMovies(movies);

  if(error) return <p>{error}</p>

  /* Exemplo com uso de funçãos assíncronas
  async function getMovies() {
    const response = await fetch('http://localhost:3001/movies')
    const data = await response.json()
    setMovies(data)
  } */

    // Função para capturar a tecla Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <main>
      <section className={styles.container}>
        <FieldSet variant="primary">
        <InputText
         value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
           placeholder="Pesquisar filmes...."/>
        <Button
         variant="icon"
         onClick={handleSearch}
         >
            <FaSearch/>
        </Button>
        </FieldSet>
        {loading && <p>Carregando filmes...</p>}
        {error && <p>{error}</p>}
        <h1 className={styles.titulo}>Em cartaz</h1>
            <MovieList movies={filteredMovies} />
      </section>
    </main>
  )
}
