/* eslint-disable */
export const initialState = {
  books: [
    { title: 'Javascript: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' },
  ],
};
/* eslint-enable */

export const reducer = (state = initialState, action) => {
  return { ...state };
}
