import { CardMovie } from "../CardMovie"
import { type CardMovieProps } from "../CardMovie"
import styles from './MovieList.module.css'

interface Movie extends CardMovieProps{
    title: string
}

interface MovieListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    movies: Movie[]
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

