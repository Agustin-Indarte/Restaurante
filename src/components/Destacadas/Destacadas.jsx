import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Destacadas.css";

const Destacadas = () => {
    // Estados del componente
    const [movies, setMovies] = useState([]); // Lista de películas
    const [genres, setGenres] = useState([]); // Lista de géneros
    const [loading, setLoading] = useState(true); // Control de carga

    // Obtener los datos de la API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = "e845bcd33e2571e0313cbf204469c4fc";

                // Obtenemos la lista de géneros
                const genresResponse = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-ES`
                );
                setGenres(genresResponse.data.genres);

                // Obtenemos las películas populares
                const moviesResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`
                );
                const moviesData = moviesResponse.data.results.slice(4, 10);

                /* Personalizacion de imagen de fondo para cada pelicula */
                const customBackdrops = {
                    822119: "https://image.tmdb.org/t/p/original/jt2HI4GBjkOK6E8T8qRjYIqUJMc.jpg", 
                    950396: "https://image.tmdb.org/t/p/original/xI8fGpn41WJgfazS4Qoppx6ZUN1.jpg", 
                    1160956: "https://image.tmdb.org/t/p/original/u7AZ5CdT2af8buRjmYCPXNyJssd.jpg", 
                    1126166: "https://image.tmdb.org/t/p/original/rOMLLMGgDgGG6XeT3P8sUdUb8nl.jpg", 
                    1294203: "https://image.tmdb.org/t/p/original/fNHZ0MNgHtBQBVvLnEUCJUDk8bz.jpg", 
                    539972: "https://image.tmdb.org/t/p/original/x5vvsZBwNbpxdDK67w6BHTo4BbR.jpg", 
                };


                // Juntamos los detalles de cada película
                const moviesWithDetails = await Promise.all(
                    moviesData.map(async (movie) => {
                        // Obtener Videos (se mantiene pero no se usa por ahora)
                        const videosResponse = await axios.get(
                            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
                        );
                        const trailer = videosResponse.data.results.find(
                            (video) => video.site === "YouTube" && video.type === "Trailer"
                        );
                        console.log(`ID: ${movie.id}, Título: ${movie.title}`)
                        return {
                            ...movie,
                            backdrop: customBackdrops[movie.id] || `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
                          };
                        
                    })
                    
                );

                setMovies(moviesWithDetails);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        
    }, []);


    // Función que obtiene los nombres de los géneros
    const getGenreNames = (genreIds) => {
        return genreIds.map((id) => genres.find((genre) => genre.id === id)?.name).join(", ");
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Carousel>
            {movies.map((movie) => (
                <Carousel.Item key={movie.id}>
                    {/* Imagen de fondo */}
                    <img className="d-block w-100 movie-backdrop" src={movie.backdrop} alt={movie.title} />

                    {/* Información de la película */}
                    <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                        <div>
                            <span className="rating">⭐{movie.rating}</span>
                            <span className="category">{getGenreNames(movie.genre_ids)}</span>
                        </div>
                        <Button variant="primary">
                            <FontAwesomeIcon icon={faPlay} /> Ver ahora
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Destacadas;
