import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardLatestStories.css'
import Heading from '../Heading';
const storiesData = [
  {
    name: 'John Doe',
    userImage: '/images/user1.jpeg',
    posterImage: '/images/1.jpeg',
    movieName: 'The Great Adventure',
  },
  {
    name: 'Jane Smith',
    userImage: '/images/user2.jpeg',
    posterImage: '/images/2.jpeg',
    movieName: 'Mystery of the Night',
  },
  {
    name: 'Alice Johnson',
    userImage: '/images/user3.jpeg',
    posterImage: '/images/3.png',
    movieName: 'Romance in Paris',
  },
];

function CardLatestStories() {
  return (
    <section id='sectionCard'>

        <Heading  first="Latest" last="roject"/>
    <div className="container divider">
      <div className="row">
        {storiesData.map((story, index) => (
          <div key={index} className=" col-sm-3 mrg ">
            <div className="card mb-4 text-white">
              <div className="card-img-overlay d-flex flex-column justify-content-between p-3" style={{ backgroundImage: `url(${story.posterImage})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '0.25rem', height: '100%' }}>
                <div className="d-flex align-items-center">
                  <img src={story.userImage} alt={`${story.name}'s avatar`} className="rounded-circle border border-white m-1" style={{ width: '30px', height: '30px' }} />
                  <h6 className="ml-3 mb-0 font-size">{story.name}</h6>
                </div>
                <h6 className="card-title mt-auto m-2">{story.movieName}</h6>
              </div>
              <div className="card-overlay bg-dark opacity-50 "></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default CardLatestStories;
