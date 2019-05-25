function reducer(state, action) {
  switch (action.type) {
    case 'SET_TECHNOLOGY':
      return {
        ...state,
        tech: action.text
      };

    default:
      return state;
  }

  // console.log(action);
  // return state;
}

export default reducer;
