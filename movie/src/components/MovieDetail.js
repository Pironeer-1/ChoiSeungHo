// src/components/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { fetchMovieDetail } from '../api';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovieDetail = async () => {
            const movieData = await fetchMovieDetail(id);
            setMovie(movieData);
        };

        getMovieDetail();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-detail">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
        </div>
    );
};

export default MovieDetail;
