import { useReducer, useRef } from 'react';
import styled, { css } from 'styled-components';
import todoReducer from '../reducer/todoReducer';
import Button from './Button';
import TodoList from './TodoList';

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
const initialTodos = {
  list: [],
  todo: '',
};

const MainContainer = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const inputRef = useRef(null);

  const handleChangeInput = (e) => {
    dispatch({
      type: 'changeInput',
      payload: e.target.value,
    });
  };
  return (
    <StMainContainer>
      <StHeaderSection>
        <input ref={inputRef} value={todos.todo} onChange={(e) => handleChangeInput(e)} />
        <Button>등록</Button>
      </StHeaderSection>

      <StBodySection>
        <TodoList />
      </StBodySection>
    </StMainContainer>
  );
};

export default MainContainer;
