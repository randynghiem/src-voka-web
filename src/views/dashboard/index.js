import React from "react";
import DashboardCard from "../../components/dashboard-card";

class Dashboard extends React.Component {
  sections = [
    {
      to: "/dictation",
      title: "VIDEO DICTATION",
      text: "Learning by watching Youtube in Deutsch and repeating along.",
      icon: "fas fa-chalkboard-teacher fa-5x"
    },
    {
      to: "/voice",
      title: "LISTEN AND LEARN",
      text: "Listen in German and write down what you hear.",
      icon: "fas fa-microphone-alt fa-5x"
    },
    {
      to: "/goal",
      title: "GOAL SETTING",
      text: "Setting goals and keep track of progress.",
      icon: "fas fa-tasks fa-5x"
    }
  ];

  render() {
    return (
      <div className="row">
        {this.sections.map(sc => (
          <div className="col-md-6">
            <DashboardCard
              to={sc.to}
              title={sc.title}
              text={sc.text}
              icon={sc.icon}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;