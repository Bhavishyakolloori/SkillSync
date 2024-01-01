import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { LoginContext } from './contexts/LoginContext';
import Suggessions from './Suggessions';
function Home() {
  let [currentUser,loginErr,loginStatus,loginUser,logoutUser]=useContext(LoginContext)

  return (
    <div className="home-container container-fluid" >
      <div>
        {loginStatus && <p className='display-4'>Hello,{currentUser.username}</p>}
      </div>
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
            src={process.env.PUBLIC_URL + '/images/OIP.jpg'}
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
            src={process.env.PUBLIC_URL + '/images/Hackathon.jpg'}
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



<div>
  <Suggessions/>
</div>








    </div>
  );
}

export default Home;
