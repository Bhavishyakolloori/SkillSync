import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  return (
    <div className="home-container container-fluid" >
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/Home1.jpg'}
            alt="First slide"
          />
          <Carousel.Caption className="text-container">
            <h1 className="text-light">Welcome to SkillSync</h1>
            <p className="text-light">Explore amazing features and content on our platform.</p>
            <Link to="/login" className="btn btn-dark">
              Login
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/carousel-image2.jpg'}
            alt="Second slide"
          />
          <Carousel.Caption className="text-container">
            <h1 className="text-light">Discover New Skills</h1>
            <p className="text-light">Enhance your knowledge with our diverse range of courses.</p>
            <Link to="/login" className="btn btn-dark">
              Login
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/carousel-image3.jpg'}
            alt="Third slide"
          />
          <Carousel.Caption className="text-container">
            <h1 className="text-light">Connect with Experts</h1>
            <p className="text-light">Engage with professionals and mentors in your field.</p>
            <Link to="/login" className="btn btn-dark">
              Login
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </div>
  );
}

export default Home;
