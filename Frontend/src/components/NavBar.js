import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          SkillSync
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-white" to="/followers">
              Followers
            </Link>
            <Link className="nav-link text-white" to="/following">
              Following
            </Link>
            <Link className="nav-link text-white" to="/profile">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
