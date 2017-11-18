import React, { Component } from 'react';
import { connect } from 'react-redux';

class GoalsList extends Component {
  renderList() {
    return this.props.goals.map(goal => {
      console.log(goal);
      return (
        <li className="list-group-item" key={goal.title}>
          {goal.title}
          <br />
          <span className="text-muted">{goal.subtitle}</span>
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// connect your state to your properties in this container
// connect this.props in the component to the actual state
function mapStateToProps(state) {
  return {
    goals: state.goals,
  };
}

export default connect(mapStateToProps)(GoalsList);
