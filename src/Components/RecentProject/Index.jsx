import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from '../Heading';

const carouselData = [
  {
    name: 'John Doe',
    userImage: '/images/card1.jpeg',
    posterImage: '/images/card1.jpeg',
    movieName: 'The Great Adventure',
  },
  {
    name: 'Jane Smith',
    userImage: '/images/user2.jpeg',
    posterImage: '/images/card2.jpeg',
    movieName: 'Mystery of the Night',
  },
  {
    name: 'Alice Johnson',
    userImage: '/images/user3.jpeg',
    posterImage: '/images/card3.png',
    movieName: 'Romance in Paris',
  },
  {
    name: 'Bob Johnson',
    userImage: '/images/user4.jpeg',
    posterImage: '/images/user3.jpeg',
    movieName: 'Jungle Safari',
  },
];

class RecentProjects extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <section className='bg-dark'>
            <Heading  first="Recent" last="Project"/>
     <div className="container ">
        <div className="row rounded">
            <div className="col-sm rounded">
            <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <div className='my-4 mx-2 rounded' style={{ position: 'relative' }}>
              <img src={item.posterImage} alt={item.movieName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', fontWeight: 'bold', padding: '5px' }}>{item.name}</div>
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white', fontWeight: 'bold',  padding: '5px' }}>{item.movieName}</div>
            </div>
          </div>
        ))}
      </Slider>
            </div>
        </div>
     </div>
     </section>
    );
  }
}

export default RecentProjects;
