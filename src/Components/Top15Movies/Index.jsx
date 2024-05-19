import React from 'react';
// import './Top5Project.css'; 
import Top5ProHeader from '../Top5ProHeader';
import MovieList from '../MovieList/Index';
import Heading from '../Heading';

const movies = [
  {
    id: 1,
    name: "Interstellar",
    type: "Sci-Fi",
    poster: "./images/2.jpeg"
  },
  {
    id: 2,
    name: "Forrest Gump",
    type: "Drama",
    poster: "./Images/11.jpeg"
  },
  {
    id: 3,
    name: "Mad Max: Fury Road",
    type: "Action",
    poster: "./Images/10.jpeg"
  },
  {
    id: 4,
    name: "The Godfather",
    type: "Crime",
    poster: "./Images/9.jpeg"
  }
];


function Top15Project() {
  return (
    <section className='top5bg'>
      <div>
      <Heading first="Top 15" last="Projects"/>
        <MovieList movies={movies} />
      </div>
    </section>
  );
}

export default Top15Project;
