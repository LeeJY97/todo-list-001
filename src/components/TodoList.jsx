import styled from 'styled-components';

const StList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoList = ({ todoList }) => {
  return (
    <StList>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.contents}</div>
      ))}
    </StList>
  );
};

export default TodoList;
