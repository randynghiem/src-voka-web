//compose different todo components
import React from 'react';
import { connect } from 'react-redux';
import GoalInput from '../../components/goal-input';
import GoalList from '../../components/goal-listing/goal-list';
import GoalFilter from '../../components/goal-listing/goal-filter';
import { addGoal, toggleGoal, FilterType, filterGoal, cleanup } from '../../event-handlers/goal';

class Goal extends React.Component {

  componentWillUnmount(){
    this.props.onCleanup();
  }

  render() {
    const { goals, filter, addGoal, toggleGoal, filterGoal } = this.props;
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-10 col-lg-8">
          <GoalInput onClick={text => addGoal(text)} />
          <GoalList goals={goals} toggleGoal={toggleGoal} />
          <GoalFilter FilterType={FilterType} filter={filter} onFilter={filterGoal} />
        </div>
      </div>
    );
  }
};

const filterGoals = (goals, filter) => {
  switch (filter) {
    case FilterType.SHOW_ACTIVE:
      return goals.filter(goal => goal.done === false);
    case FilterType.SHOW_DONE:
      return goals.filter(goal => goal.done === true);
    default:
      return goals;
  }
};

export default connect(
  ({ GoalState }) => ({
    goals: filterGoals(GoalState.goals, GoalState.filter),
    filter: GoalState.filter
  }),
  dispatch => ({
    addGoal: text => dispatch(addGoal(text)),
    toggleGoal: id => dispatch(toggleGoal(id)),
    filterGoal: filter => dispatch(filterGoal(filter)),
    onCleanup: () => dispatch(cleanup())
  })
)(Goal);