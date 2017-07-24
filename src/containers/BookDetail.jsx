import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  render() {
    const activeBook = this.props.book;
    return (
      <div>
        {activeBook &&
          <h2>{activeBook.title}</h2>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('_____ BookDetails ___ mapStateToProps: ', state);
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

