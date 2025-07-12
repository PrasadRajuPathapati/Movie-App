// src/App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieDetail from './pages/MovieDetail';
import WatchMovie from './pages/WatchMovie'; // NEW
import IAExplorer from './pages/IAExplorer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const sampleMovies = [
      {
        id: 1,
        title: 'Kuberaa',
        rating: 'N/A',
        poster: process.env.PUBLIC_URL + '/posters/kubera6.webp',
        trailerUrl:
          'https://res.cloudinary.com/duuedv9aa/video/upload/v1752240263/Kuberaa_Official_Trailer_Telugu___Nagarjuna___Dhanush___Rashmika_Mandanna___Sekhar_Kammula___DSP_oivfml.mp4',
        movieUrl: 'https://archive.org/download/video_20250703_162418/video_20250703_162418.ia.mp4',
      },
      {
        id: 2,
        title: 'Karate Kid Legends',
        rating: '8.2',
        poster: process.env.PUBLIC_URL + '/posters/karate_kid_legends.webp',
        trailerUrl:
          'https://res.cloudinary.com/duuedv9aa/video/upload/v1752241799/KARATE_KID__LEGENDS_-_Official_Telugu_Trailer___Releasing_Exclusively_In_Cinemas_May_30_2025_b2l9vq.mp4',
        movieUrl: 'https://example.com/watch-karate-kid-legends',
      },
    ];
    setMovies(sampleMovies);
  }, []);

  const HERO_IMAGE = process.env.PUBLIC_URL + '/posters/hero.webp';

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div className="App">
            <header>
              <h1>Movie Hub</h1>
              <nav>
                <a href="/">Home</a>
                <a href="#movies">Movies</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </nav>
            </header>

            <section
              className="hero"
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            >
              <h2>Welcome to Movie Hub</h2>
              <p>Discover the latest movies and reviews</p>
            </section>

            <section className="movies-container" id="movies">
              <h3>Popular Action Movies</h3>
              <div className="movies-grid">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </section>

            <footer>
              <p>&copy; 2025 Movie Hub. All rights reserved.</p>
            </footer>
          </div>
        }
      />

      {/* Movie Detail Page */}
      <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />

      {/* Watch Page */}
      <Route path="/watch/:id" element={<WatchMovie movies={movies} />} />

    </Routes>
  );
}

export default App;
