import { useState } from "react";
import type { Movie } from "../../types";

export const useFilterMovies = (movies: Movie[]) => {
    const [searchTerm, setSearchTerm] = useState(""); // O que o usuário digita
    const [lastConfirmedTerm, setLastConfirmedTerm] = useState(""); // O que foi buscado via Enter/Botão

    // Lógica Derivada: Se o input está vazio, o filtro é vazio. 
    // Caso contrário, usamos o último termo que o usuário confirmou.
    const activeFilter = searchTerm === "" ? "" : lastConfirmedTerm;

    const handleSearch = () => {
        setLastConfirmedTerm(searchTerm);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.titulo.toLowerCase().includes(activeFilter.toLowerCase())
    );

    return {
        handleSearch,
        searchTerm,
        setSearchTerm,
        filteredMovies,
    };
};