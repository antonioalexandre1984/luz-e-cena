import styles from './CardMovie.module.css'
import { Tag, type TagPropsState } from '../Tag'

export interface CardMovieProps {
    id: number
    src: string
    alt: string
    titulo: string
    genero: string
    categoria: TagPropsState
    censura: TagPropsState
    duracao: number
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
