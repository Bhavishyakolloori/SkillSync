import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

function Footer() {
  return (
    <div className="mt-5">
      <div className='footer bg-dark text-light p-3'>
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6">
            <h4>Skill Sync</h4>
            <h5>Follow Us </h5>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-3 mx-3 text-white">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-3 mx-3 text-white">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-3 mx-3 text-white">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" className='mx-3 text-white' />
            </a>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-right">
            <p className="mb-1">Contact us: +91 2345678901</p>
          </div>

          {/* Copyright */}
          <div className="col-12 text-center mt-3">
            <p>© {new Date().getFullYear()} SkillSync. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
