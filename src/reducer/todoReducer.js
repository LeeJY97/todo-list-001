function todoReducer(state, action) {
  console.log('state !!! ', state);
  console.log('action !!! ', action);
  switch (action.type) {
    case 'add':
      return {
        list: [...state.list, { todo: state.todo, isCompleted: false }],
        todo: ''
      }

    case 'changeInput':
      return {
        ...state,
        todo: action.payload
      }
    case 'toggle':

      return {
        ...state,
        list: state.list.map((todo, index) => {
          if (index === action.payload) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        })

      }
    default:
      throw Error('todoReducer 에러');
  }
}

export default todoReducer;

