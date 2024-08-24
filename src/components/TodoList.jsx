import styled from 'styled-components';
import shortid from 'shortid';
import { useTodo, useTodoDispatch } from '../context/todoContext';

const StList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSpan = styled.span`
  text-decoration: ${({ isCompleted }) => isCompleted && 'line-through'};
`;

const TodoList = () => {
  const todos = useTodo();
  const dispatch = useTodoDispatch();

  return (
    <StList>
      {todos.list.map((todo, index) => {
        return (
          <StSpan
            key={shortid.generate()}
            onClick={() =>
              dispatch({
                type: 'toggle',
                payload: index,
              })
            }
            isCompleted={todo.isCompleted}
          >
            {todo.todo}
          </StSpan>
        );
      })}
    </StList>
  );
};

export default TodoList;
