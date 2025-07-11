// src/pages/IAExplorer.js
import React, { useState } from 'react';
import './IAExplorer.css';

const IAExplorer = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(
      `https://archive.org/advancedsearch.php?q=mediatype:(movies)+AND+title:(${encodeURIComponent(
        query
      )})&fl[]=identifier&fl[]=title&rows=10&page=1&output=json`
    );
    const data = await res.json();
    setResults(data.response.docs);
  };

  return (
    <div className="ia-page">
      <h2>Explore Free Movies (Internet Archive)</h2>
      <input
        type="text"
        placeholder="Search public domain movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="ia-results">
        {results.map((movie) => (
          <div className="ia-card" key={movie.identifier}>
            <h4>{movie.title}</h4>
            <iframe
              src={`https://archive.org/embed/${movie.identifier}`}
              width="320"
              height="240"
              frameBorder="0"
              allowFullScreen
              title={movie.title}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IAExplorer;
