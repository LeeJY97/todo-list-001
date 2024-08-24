import { useTodo, useTodoDispatch } from '../context/todoContext';

const FormInput = ({ inputRef }) => {
  const todos = useTodo();
  const dispatch = useTodoDispatch();

  return (
    <input
      type='text'
      value={todos.todo}
      onChange={(e) =>
        dispatch({
          type: 'changeInput',
          payload: e.target.value,
        })
      }
      ref={inputRef}
    />
  );
};

export default FormInput;
