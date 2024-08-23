function todoReducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload];
    }
    default:
      throw Error('todoReducer 에러');
  }
}

export default todoReducer;

