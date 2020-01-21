import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SetCard = ({ card }) => {
  return (
    <div className="col-sm-6 mb-4" key={card.id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/voice/${card.id}`}>{card.title}</Link>
          </h5>
          <div className="card-text">
            <ul className="list-group">
              {card.sections.map(sec => (
                <li className="list-group-item border-0 p-0" key={sec.title}>
                  {sec.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

SetCard.propTypes = {
  card: PropTypes.object.isRequired
};

export default SetCard;
