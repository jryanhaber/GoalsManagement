import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      console.log(book);
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          key={book.title}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// below creates a smart component

// create a function that connects state to props
// this is the GLUE between react and redux
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// anything returned from this function hits the props
function mapDispatchToProps(dispatch) {
  // when selectbook is called, pass result to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// takes the function and component and make a container
// the container is aware of state via redux

// promote books list from component to container, make it aware of the dispatch method, selectbook
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
