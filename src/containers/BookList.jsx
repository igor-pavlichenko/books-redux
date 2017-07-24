import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../redux/actions/index';

class BookList extends Component {


  renderBooks = () => {
    console.log('renderBooks block');
    console.log('this.props: ', this.props);
    return this.props.books.map((book) => {
      return (
        <li
        className="list-group-item"
        key={book.title}
        onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
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

/**
 * Whatever is returned from this function will end up as this.props
 * inside BookList
 *
 * @param {any} state
 * @returns
 */
function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    books: state.books.books,
  };
}

/**
 * Anything returned from this function will end up as props
 * on the BookList container
 *
 * @param {any} dispatch
 * @returns
 */
function mapDispatchToProps(dispatch) {
  // whenever 'selectBook' is called, the result should be passed
  // to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
