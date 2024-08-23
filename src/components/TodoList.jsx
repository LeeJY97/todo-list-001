import styled from 'styled-components';
import shortid from 'shortid';
const StList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoList = ({ todoList }) => {
  return (
    <StList>
      {todoList.map((todo) => {
        return <div key={shortid.generate()}>{todo}</div>;
      })}
    </StList>
  );
};

export default TodoList;
