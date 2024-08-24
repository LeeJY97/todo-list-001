import { useRef, useReducer } from 'react';
import styled, { css } from 'styled-components';
import Button from '../components/Button';
import TodoList from '../components/TodoList';
import todoReducer from '../reducer/todoReducer';

const initialTodos = {
  list: [],
  todo: '',
};

const Home = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const inputRef = useRef(null);

  const handleChangeInput = (e) => {
    dispatch({
      type: 'changeInput',
      payload: e.target.value,
    });
  };

  const handleToggle = (index) => {
    dispatch({
      type: 'toggle',
      payload: index,
    });
  };

  const addTodoList = () => {
    dispatch({
      type: 'add',
    });

    inputRef.current.focus();
  };

  return (
    <StMainContainer>
      <StHeaderSection>
        <input ref={inputRef} value={todos.todo} onChange={(e) => handleChangeInput(e)} />
        <Button onClick={addTodoList}>등록</Button>
      </StHeaderSection>

      <StBodySection>
        <TodoList todoList={todos.list} handleToggle={handleToggle} />
      </StBodySection>
    </StMainContainer>
  );
};

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WidthStandard = css`
  width: 60%;
`;

const StMainContainer = styled(FlexCenter)`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const StHeaderSection = styled(FlexCenter)`
  ${WidthStandard}
  height: 40%;

  background-color: #cfbaba;
`;

const StBodySection = styled(FlexCenter)`
  ${WidthStandard}
  height: 60%;

  background-color: #abebe0;
`;

export default Home;
