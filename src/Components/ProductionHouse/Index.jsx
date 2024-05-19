import React from 'react';
import './ProductionHouse.css';

const productionHouses = [
  {
    name: 'DreamWorks',
    image: './images/1.jpeg'
  },
  {
    name: 'Pixar',
    image: './images/18.jpeg'
  },
  {
    name: 'EEC STUDIOS',
    image: './images/30.jpeg'
  },
  {
    name: 'Warner Bros.',
    image: './images/8.jpeg'
  },
  {
    name: 'PurpleBAT Film Company.',
    image: './images/11.jpeg'
  },
  {
    name: 'Warner Bros.',
    image: './images/1.jpeg'
  },
];

function ProductionHouse() {
  return (
    <section className='bg-dark p-4'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className='text-white proHouse-h1'>Production <span className='proHouse-text'>House</span></h1>
            <div className="row">
              {productionHouses.map((house, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="cardss">
                    <img src={house.image} alt={`${house.name} logo`} className="card-image" />
                    <div className="card-name text-start">{house.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductionHouse;
