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


export interface TagPropsState {
    value: TagProps;
}

export interface TagProps {
    value: Categoria | Censura;
}

type Categoria = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos"

type Censura = "2D" | "3D" 