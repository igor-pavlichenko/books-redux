import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  render() {
    const activeBook = this.props.book;
    return (
      <div>
        {activeBook &&
        <div>
          <h3>Title: {activeBook.title}</h3>
          <p>Pages: {activeBook.pages}</p>
        </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook.activeBook,
  };
}

function mapDispatchToProps(dispatch) {
  // whenever 'selectBook' is called, the result should be passed
  // to all our reducers
  // return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(BookDetail);

