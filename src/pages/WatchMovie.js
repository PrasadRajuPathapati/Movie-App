import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './WatchMovie.css';

const WatchMovie = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="watch-movie-page">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>

      <div className="video-container">
        <iframe
          src={movie.movieUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={movie.title}
        ></iframe>
      </div>
    </div>
  );
};

export default WatchMovie;
