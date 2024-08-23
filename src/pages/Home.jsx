import { useRef, useState, useReducer } from 'react';
import styled, { css } from 'styled-components';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import TodoList from '../components/TodoList';
import todoReducer from '../reducer/todoReducer';

const initialTodos = [];

const Home = () => {
  const [todo, setTodo] = useState('');
  const [todoList, dispatch] = useReducer(todoReducer, initialTodos);
  const inputRef = useRef(null);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  console.log('todoList', todoList);

  const addTodoList = () => {
    // action 객체
    dispatch({
      type: 'add',
      payload: todo,
    });

    setTodo('');
    inputRef.current.focus();
  };

  return (
    <StMainContainer>
      <StHeaderSection>
        <FormInput inputRef={inputRef} value={todo} onChange={handleTodo} />
        <Button onClick={addTodoList}>등록</Button>
      </StHeaderSection>

      <StBodySection>
        <TodoList todoList={todoList} />
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
