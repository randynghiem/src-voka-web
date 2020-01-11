import React from 'react';
import 'bootstrap/js/dist/collapse';

export default function (props) {
  return (
    <nav className="navbar navbar-dark bg-info navbar-expand-lg fixed-top portfolio-navbar gradient">
      <div className="container app-container">
        <a href="/" className="navbar-brand logo">Deutsch Lernen</a>
        <button className="navbar-toggler" data-target="#navbarNav" data-toggle="collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <a href="/" className="nav-link active">Dashboard</a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="/signin" className="nav-link active">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}