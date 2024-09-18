// src/App.js

import React, { useState, useEffect } from 'react';
import { fetchMovies } from './api';
import MovieList from './components/MovieList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const moviesData = await fetchMovies();
                setMovies(moviesData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch movies');
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="app">
            <header className="app-header">
                <h1>Movie App</h1>
            </header>
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
