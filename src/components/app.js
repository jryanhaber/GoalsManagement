import React, { Component } from 'react';
import BookList from '../containers/book-list';
import GoalsList from '../containers/goal-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <GoalsList />
          <BookList />
        </div>
      </div>
    );
  }
}
