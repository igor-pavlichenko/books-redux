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
  mapDispatchToProps,
  mapStateToProps,
)(BookList);
