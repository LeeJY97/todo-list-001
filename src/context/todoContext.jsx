import { createContext, useContext, useReducer } from 'react';

export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);

const initialTodos = {
  list: [],
  todo: '',
};

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        list: [...state.list, { todo: state.todo, isCompleted: false }],
        todo: '',
      };

    case 'changeInput':
      return {
        ...state,
        todo: action.payload,
      };
    case 'toggle':
      return {
        ...state,
        list: state.list.map((todo, index) => {
          if (index === action.payload) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }),
      };
    default:
      throw Error('todoReducer 에러');
  }
}

export default todoReducer;
