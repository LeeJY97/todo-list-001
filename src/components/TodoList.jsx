import styled from 'styled-components';
import shortid from 'shortid';
const StList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSpan = styled.span`
  text-decoration: ${({ isCompleted }) => isCompleted && 'line-through'};
`;

const TodoList = ({ todoList, handleToggle }) => {
  return (
    <StList>
      {todoList.map((todo, index) => {
        return (
          <StSpan
            key={shortid.generate()}
            onClick={() => handleToggle(index)}
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
