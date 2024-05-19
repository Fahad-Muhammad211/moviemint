import React from 'react';
import './heading.css'
function Heading({ first, last }) {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex align-items-center ml mb-3">
          <button className="lst-btn ml-2">{first} <span className='btn-span'>{last}</span> </button>
          <div className="line-div"></div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
