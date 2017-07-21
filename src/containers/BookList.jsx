import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {


  renderBooks = () => {
    console.log('renderBooks block');
    console.log('this.props: ', this.props);
    return this.props.books.map((book) => {
      return (
        <li className="list-group-item" key={book.title}>{book.title}</li>
      );
    });
  }

  render() {
    console.log('props: ', this.props);
    return (
      <ul className="list-group col-sm-4">
        {this.renderBooks()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
  };
}

export default connect(
  mapStateToProps,
)(BookList);
