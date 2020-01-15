import "./index.css";
import React from "react";
import "bootstrap/js/dist/collapse";
import { Link } from "react-router-dom";

export default function({ isAuthenticated, signInOrOut }) {
  return (
    <nav className="navbar navbar-dark bg-info navbar-expand-lg fixed-top portfolio-navbar gradient">
      <div className="container app-container">
        <Link to="/" className="navbar-brand logo">
          Deutsch Lernen
        </Link>
        <button className="navbar-toggler" data-target="#navbarNav" data-toggle="collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <Link to="/" className="nav-link voka-nav-link active">
                Dashboard
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <span className="nav-link active voka-nav-link" onClick={signInOrOut}> 
                {isAuthenticated ? "Sign Out" : "Sign In"}|<i className="fab fa-google fa-xs"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
