import { useState, useEffect } from "react";
import { getMovies } from "../../api";
import type { Movie } from "../../types";

export const useFetchMovies = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = async () => {
        setLoading(true);
        setError(null);
        try {
            const moviesData = await getMovies();
            setMovies(moviesData);
        } catch (err) {
            setError("Erro ao buscar o filme" + err)
            console.error("Erro ao buscar o filme" + err) // a ser removido
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            await fetchMovies();
        };
        fetchData();
    }, []);

    return {
        movies,
        loading,
        error
    }
}