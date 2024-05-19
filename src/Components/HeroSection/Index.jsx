import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';
import { Nav } from 'react-bootstrap';
import MyNavbar from '../Navbar/Index';
import ContextDisplay from '../ContextDisplay/Index';

const HeroSection = () => {
  return (
    <div id="sectionMainBody">
      <MyNavbar/>
      <div className="container">
        <div className="row ">
          <div className="col-sm-7 mrg-top ">
          <h1>Welcome To The Revolution</h1>
          <p class="text-white text-lg">Changing the game for <span class="text-movie-green">film Production</span> and <span class="text-movie-green">Ownership</span></p>
          <p>
            MovieMint liberates Filmmakers and fans through decentralized funding.
              Our Blockchain platform seamlessly connects Independent Creators and Passionate Supporters. Filmmakers tokenize projects into NFT "movie shares" that fans can buy and tradel. This raises production funds while retaining full ownership and creative control while fans.
                   NFT CAPITAL RAISED
                     US $114.74012
                         The Next Great Cinematic era Starts NOW on the Blockchain.
                       Explore Projects
                   Become a Partner

          </p>
          <p className='text-white margin-p '>
          The Next Great Cinematic era Starts NOW on the Blockchain
</p>


<div>
     
      </div>


          </div>
          <div className="col-sm-5">
            <ContextDisplay/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
