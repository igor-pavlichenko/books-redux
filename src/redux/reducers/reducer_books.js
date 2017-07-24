/* eslint-disable */
export const initialState = {
  books: [
    { title: 'Javascript: The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 750 },
    { title: 'The Dark Tower', pages: 592 },
    { title: 'Eloquent Ruby', pages: 1 },
  ],
};
/* eslint-enable */

export const reducer = (state = initialState, action) => {
  return { ...state };
}
