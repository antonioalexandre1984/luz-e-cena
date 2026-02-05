import styles from './CardMovie.module.css'
import { Tag, type TagPropsState } from '../Tag'

interface CardMovieProps {
    src: string
    alt: string
    titulo: string
    genero: string
    categoria: TagPropsState
    censura: TagPropsState
    duracao: string
}
export const CardMovie = ( { src, alt, titulo, genero, categoria,censura,duracao }: CardMovieProps) => {

  return (
      <li className={styles.card}>
        <img src={src} alt={alt}/>    
        <div className={styles.container}>
            <h3>{titulo}</h3>
            <div className={styles.linha1}>
                <p>{genero}</p>
                <Tag
                    value={categoria.value}
                />
                </div> 
                <div className={styles.linha2}>
                <p>{duracao}</p>
                <Tag
                    value={censura.value}
                />
                </div> 

        </div>
      </li>
  )
}
