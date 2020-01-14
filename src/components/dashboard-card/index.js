import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ({ to, title, text, icon }) {
  return (
    <div className="card shadow border-info py-2 dashboard-card mb-3">
      <div className="card-body">
        <div className="row align-items-center no-gutters">
          <div className="col mr-2">
            <Link className="font-weight-bold" to={to}>{title}</Link>
            <div>{text}</div>
          </div>
          <div className="col-auto">
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </div>
  )
};