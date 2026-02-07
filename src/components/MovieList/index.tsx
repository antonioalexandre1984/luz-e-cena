import { CardMovie } from "../CardMovie"
import styles from './MovieList.module.css'
import type {Movie} from "../../types/index"

interface MovieListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    movies: Movie[];
}

export const MovieList = ({movies}:MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie) => (
        <CardMovie key={movie.id} {...movie}/>
      ))}
    </ul>
  )
}

