export interface CardMovieProps {
    id: number
    src: string
    alt: string
    titulo: string
    genero: string
    categoria: string
    censura: string
    duracao: number
    title: string
}


export interface TagPropsState {
    value: TagProps;
}

export interface TagProps {
    value: "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos" | "2D" | "3D";
}

/* type Categoria = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos"

type Censura = "2D" | "3D"  */