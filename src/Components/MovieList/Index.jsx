import React from 'react';
import './MovieList.css'; 

function MovieCard({ movie }) {
  return (
    <div className="card movie-card">
      <img src={movie.poster} className="card-img-top" alt={movie.name} />
      <div className="card-img-overlay">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">{movie.type}</p>
      </div>
    </div>
  );
}

function MovieList({ movies }) {
  return (
    <div className="container">
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-sm-3">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
