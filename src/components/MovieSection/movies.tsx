import type { Movie } from "../../types";
import amigodaSombra from "../../../public/Imagens/Cards filmes/Card - Amigo da sombra.png"
import amigosdobosquemagico from "../../../public/Imagens/Cards filmes/Card - Amigos do bosque mágico.png"
import caminhoparaoabismo from "../../../public/Imagens/Cards filmes/Card - Caminho para o abismo.png"
import desastresdoescritorio from "../../../public/Imagens/Cards filmes/Card - Desastres do Escritório.png"
import laesperanza from "../../../public/Imagens/Cards filmes/Card - La Esperanza.png"
import mestresdofuturo from "../../../public/Imagens/Cards filmes/Card - Mestres do futuro.png"
import nexus2 from "../../../public/Imagens/Cards filmes/Card - O nexus do tempo.png"







export const movies: Movie[] = [
    {
        id: 1,
        src: nexus2,
        alt: "Imagem do filme Amanhecer",
        titulo: "Amanhecer",
        categoria: "2D",
        censura: "Livre",
        genero: "Romance",
        duracao: 90,
        title: "Amanhecer",
    },
    {
        id: 2,
        src: amigodaSombra,
        alt: "Imagem do filme Amigo da sombra",
        titulo: "Amigo da sombra",
        categoria: "2D",
        censura: "12 anos",
        genero: "Suspense",
        duracao: 110,
        title: "Amigo da sombra",
    },
    {
        id: 3,
        src: amigosdobosquemagico,
        alt: "Imagem do filme Amigo do bosque mágico",
        titulo: "Amigo do bosque mágico",
        categoria: "2D",
        censura: "Livre",
        genero: "Animação",
        duracao: 60,
        title: "Amigo do bosque mágico",
    },
    {
        id: 4,
        src: caminhoparaoabismo,
        alt: "Imagem do filme Caminho para o abismo",
        titulo: "Caminho para o abismo",
        categoria: "2D",
        censura: "14 anos",
        genero: "Horror",
        duracao: 103,
        title: "Caminho para o abismo",
    },
    {
        id: 5,
        src: desastresdoescritorio,
        alt: "Imagem do filme Desastres do Escritório",
        titulo: "Desastres do Escritório",
        categoria: "2D",
        censura: "Livre",
        genero: "Comédia",
        duracao: 85,
        title: "Desastres do Escritório",
    },
    {
        id: 6,
        src: mestresdofuturo,
        alt: "Imagem do filme Mestres do Futuro",
        titulo: "Mestres do Futuro",
        categoria: "2D",
        censura: "Livre",
        genero: "Documentário",
        duracao: 120,
        title: "Mestres do Futuro",
    },
    {
        id: 7,
        src: laesperanza,
        alt: "Imagem do filme La Esperanza",
        titulo: "La Esperanza",
        categoria: "2D",
        censura: "12 anos",
        genero: "Drama",
        duracao: 98,
        title: "La Esperanza",
    },
    {
        id: 8,
        src: nexus2,
        alt: "Imagem do filme O nexus do tempo",
        titulo: "O nexus do tempo",
        categoria: "3D",
        censura: "10 anos",
        genero: "Ficcção Científica",
        duracao: 105,
        title: "O nexus do tempo",
    },
];