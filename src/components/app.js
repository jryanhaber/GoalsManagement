import React, { Component } from 'react';
import BookList from '../containers/book-list';
import GoalsList from '../containers/goal-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <GoalsList />
          <BookList />
          <BookDetail />
        </div>
      </div>
    );
  }
}
