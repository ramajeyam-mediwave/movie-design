import axios from "axios";
import { IMovieAdd } from "../type";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5476",
});

export const getMovies = () => {
  return axiosInstance.get("/movies");
};

export const addMovie = (payload: IMovieAdd) => {
  return axiosInstance.post("/movies", payload);
};

export const updateMovie = (payload: IMovieAdd, movieId: number) => {
  return axiosInstance.put(`/movies/${movieId}`, payload);
};

export const deleteMovie = (movieId: number) => {
  return axiosInstance.delete(`/movies/${movieId}`);
};
