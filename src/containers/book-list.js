import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item" key="book.title">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group-item col-sm-4">{this.renderList()}</ul>;
  }
}

// create a function that connects state to props
// this is the GLUE between react and redux
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// takes the function and component and make a container
// the container is aware of state via redux

export default connect(mapStateToProps)(BookList);
