export const initialState = {

};

// state argument is not application's state, only the state
// this reducer is responcible for
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return {
        ...state,
        activeBook: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
