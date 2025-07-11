import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img className="movie-poster" src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h4 className="movie-title">{movie.title}</h4>
        <p className="movie-rating">⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
