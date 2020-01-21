import React from "react";
import { connect } from "react-redux";
import { getSets } from "../../services/voka-api";
import SetCard from '../../components/set-card';

/**
 * Dashboard to explore available sets
 */
class Voice extends React.Component {
  state = {
    sets: null
  };

  componentDidMount() {
    getSets("a1").then(data => {
      this.setState({ sets: data });
    });
  }

  render() {
    const { sets } = this.state;
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
          {sets && sets.map(s => <SetCard card={s} />)}
        </div>
      </form>
    );
  }
}

export default connect()(Voice);