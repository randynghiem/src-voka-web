import React from 'react';
import GoalItem from './goal-list-item';

export default function ({ goals, toggleGoal }) {
  return (
    <ul className="list-group mb-3">
      {
        goals != null &&
        goals.map(goal => (
          <GoalItem key={goal.id} {...goal} onClick={() => toggleGoal(goal.id)} />
        ))
      }
    </ul>
  );
}