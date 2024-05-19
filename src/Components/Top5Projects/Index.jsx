import React from 'react';
// import './Top5Project.css'; 
import Top5ProHeader from '../Top5ProHeader';
import MovieList from '../MovieList/Index';

const movies = [
  {
    id: 1,
    name: "Inception",
    type: "Sci-Fi",
    poster: "./Images/user3.jpeg"
  },
  {
    id: 2,
    name: "The Shawshank Redemption",
    type: "Drama",
    poster: "./Images/12.jpeg"
  },
  {
    id: 3,
    name: "The Dark Knight",
    type: "Action",
    poster: "./Images/8.jpeg"
  },
  {
    id: 4,
    name: "Pulp Fiction",
    type: "Crime",
    poster: "./Images/13.jpeg"
  }
];

function Top5Project() {
  return (
    <section className='top5bg'>
      <div>
        <Top5ProHeader />
        <MovieList movies={movies} />
      </div>
    </section>
  );
}

export default Top5Project;
