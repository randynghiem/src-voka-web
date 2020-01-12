import React from 'react';
import DashboardCard from '../../components/dashboard-card';

class Dashboard extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-6">
          <DashboardCard to="/dictation"
            title="VIDEO DICTATION"
            text="Learning by watching Youtube in Deutsch and repeating along."
            icon="fas fa-chalkboard-teacher fa-5x" />
        </div>
        <div className="col-md-6">
          <DashboardCard to="/goal"
            title="GOAL SETTING"
            text="Setting goals and keep track of progress."
            icon="fas fa-tasks fa-5x" />
        </div>
      </div>
    );
  }
};

export default Dashboard;