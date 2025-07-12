// src/pages/MovieDetail.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="movie-detail-page">
      {/* Trailer Section */}
      <div className="top-trailer-section">
        <div className="trailer-container">
          <video
            src={movie.trailerUrl}
            autoPlay
            muted
            loop
            controls={false}
            playsInline
          />
          <div className="fade-overlay-bottom"></div>
        </div>
      </div>

      {/* Back Button */}
      <div className="top-left-button">
        <button className="back-btn" onClick={() => navigate('/')}>
          ⬅ Back to Home
        </button>
      </div>

      {/* Movie Info Section */}
      <div className="bottom-details">
        <h1>{movie.title}</h1>
        <div className="hero-buttons">
          <button
            className="watch-btn"
            onClick={() => navigate(`/watch/${movie.id}`)}
          >
            ▶ Watch Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
