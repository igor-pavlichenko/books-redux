import { combineReducers } from 'redux';
import * as Books from './reducer_books.js';


export const rootReducer = combineReducers({
  books: Books.reducer,
});

export const initialState = {
  books: Books.initialState,
};

export default rootReducer;
