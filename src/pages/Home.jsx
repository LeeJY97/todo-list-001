import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import TodoList from '../components/TodoList';
import shortid from 'shortid';

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

const Home = () => {
  const [todo, setTodo] = useState({ id: null, contents: '' });
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  const handleTodo = (e) => {
    setTodo((state) => ({
      ...state,
      contents: e.target.value,
    }));
  };

  const addTodoList = () => {
    todo.id = shortid.generate();

    setTodoList([...todoList, todo]);

    setTodo({ id: shortid.generate(), contents: '' });
    inputRef.current.focus();
  };

  return (
    <StMainContainer>
      <StHeaderSection>
        <FormInput inputRef={inputRef} value={todo.contents} onChange={handleTodo} />
        <Button onClick={addTodoList}>등록</Button>
      </StHeaderSection>

      <StBodySection>
        <TodoList todoList={todoList} />
      </StBodySection>
    </StMainContainer>
  );
};

export default Home;
