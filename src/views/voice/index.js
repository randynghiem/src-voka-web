import React from "react";
import { connect } from "react-redux";
import { getSets } from "../../services/voka-api";
import { Link } from "react-router-dom";

class Voice extends React.Component {
  state = {
    sets: []
  };

  componentDidMount() {
    getSets("a1").then(data => {
      this.setState({ sets: data });
    });
  }

  render() {
    const { sets } = this.state;
    console.log(sets);
    return (
      <form>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for available sets" />
            <div className="input-group-append">
              <button className="btn btn-info"> Search </button>
            </div>
          </div>
        </div>
        <h4>Popular Sets</h4>
        <div className="row">
          {sets.map(s => (
            <div className="col-sm-6 mb-4" key={s.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to={`/voice/${s.id}`}>{s.title}</Link>
                  </h5>
                  <div className="card-text">
                    <ul className="list-group">
                      {s.sections.map(sec => (
                        <li className="list-group-item border-0 p-0" key={sec.title}>
                          {sec.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
    );
  }
}

export default connect()(Voice);
