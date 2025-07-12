// src/pages/WatchMovie.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './WatchMovie.css';

const WatchMovie = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p style={{ color: 'white', textAlign: 'center' }}>Movie not found.</p>;

  return (
    <div className="watch-container">
      <header className="watch-header">
        <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
        <h1>{movie.title}</h1>
      </header>

      <div className="video-wrapper">
        <video
          src={movie.movieUrl}
          controls
          autoPlay
          className="watch-video"
        />
      </div>
    </div>
  );
};

export default WatchMovie;
