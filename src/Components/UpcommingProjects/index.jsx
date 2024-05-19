import React from 'react';
import './UpcommingProjects.css'; 
import Heading from '../Heading';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const moviesData = [
    {
      id: 1,
      name: "Inception",
      price: 3.99,
      studio: "EEC STUDIOS",
      poster: "./images/13.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 2,
      name: "The Shawshank Redemption",
      price: 3.49,
      studio: "EEC STUDIOS",
      poster: "./images/14.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 3,
      name: "The Dark Knight",
      price: 3.79,
      studio: "EEC STUDIOS",
      poster: "./images/15.jpeg",
      logo: "./images/user2.jpeg"
    },
   
    {
      id: 6,
      name: "The Matrix",
      price: 3.59,
      studio: "EEC STUDIOS",
      poster: "./images/18.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 7,
      name: "Fight Club",
      price: 3.29,
      studio: "EEC STUDIOS",
      poster: "./images/19.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 8,
      name: "The Godfather",
      price: 3.89,
      studio: "EEC STUDIOS",
      poster: "./images/10.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 9,
      name: "Titanic",
      price: 3.69,
      studio: "EEC STUDIOS",
      poster: "./images/20.jpeg",
      logo: "./images/user2.jpeg"
    },
   
    
    {
      id: 11,
      name: "The Silence of the Lambs",
      price: 3.59,
      studio: "EEC STUDIOS",
      poster: "./images/22.jpeg",
      logo: "./images/user2.jpeg"
    },
    
    {
      id: 13,
      name: "The Departed",
      price: 3.69,
      studio: "EEC STUDIOS",
      poster: "./images/24.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 14,
      name: "Saving Private Ryan",
      price: 3.79,
      studio: "EEC STUDIOS",
      poster: "./images/13.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 15,
      name: "Schindler's List",
      price: 3.89,
      studio: "EEC STUDIOS",
      poster: "./images/26.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 16,
      name: "The Green Mile",
      price: 3.49,
      studio: "EEC STUDIOS",
      poster: "./images/28.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 17,
      name: "The Lion King",
      price: 3.99,
      studio: "EEC STUDIOS",
      poster: "./images/27.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 18,
      name: "The Prestige",
      price: 3.79,
      studio: "EEC STUDIOS",
      poster: "./images/28.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 19,
      name: "The Usual Suspects",
      price: 3.49,
      studio: "EEC STUDIOS",
      poster: "./images/29.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 20,
      name: "Back to the Future",
      price: 3.69,
      studio: "EEC STUDIOS",
      poster: "./images/14.jpeg",
      logo: "./images/user2.jpeg"
    },
    {
      id: 21,
      name: "Jurassic Park",
      price: 3.59,
      studio: "EEC STUDIOS",
      poster: "./images/15.jpeg",
      logo: "./images/user2.jpeg"
    },
    
];

function MovieCard({ movie }) {
  return (
    <div className="col-md-3 col-sm-6 ">
      <div className="cards my-2 m-4">
        <div className="upper-cards">
          <img src={movie.poster} alt={movie.name} className="poster text-white" />
        </div>
        <div className="lower-car">
          <div className="details">
            <h6 className='text-white my-2 h6-m-name'>{movie.name}</h6>
            <div className="logos d-flex align-items-center">
              <img src={movie.logo} alt="Studio Logos" className="logo-img" />
              <h6 className='text-white font mb-0'>{movie.studio}</h6>
            </div>
            <p className="pric text-white">${movie.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function UpcomingProjects() {
  return (
    <section className='bg-clr'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Heading first='Upcomming' last='Projects' />
          </div>
          <div className="col-sm-6">
            <div className="d-inline-block">
              <DropdownButton id="dropdown-basic-button" title="Genre" variant="secondary">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="d-inline-block">
              <DropdownButton id="dropdown-basic-button" title="Category" variant="secondary">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="d-inline-block">
              <DropdownButton id="dropdown-basic-button" title="Location" variant="secondary">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
        <div className="row">
          {moviesData.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingProjects;
