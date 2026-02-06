import axios from "axios";
import type { CardMovieProps } from "../types";

const BASE_URL = "http://localhost:3001";

export const getMovies = async (): Promise<CardMovieProps[]> => {
    const response = await axios.get<CardMovieProps[]>(`${BASE_URL}/movies`);
    return response.data;
}


