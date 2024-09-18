// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
    );
};

export default MovieCard;
