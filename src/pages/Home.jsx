import { useRef } from 'react';
import styled, { css } from 'styled-components';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import TodoList from '../components/TodoList';
import { TodoProvider } from '../context/todoContext';

const Home = () => {
  const inputRef = useRef(null);

  return (
    <TodoProvider>
      <StMainContainer>
        <StHeaderSection>
          <FormInput inputRef={inputRef} />
          <Button inputRef={inputRef}>등록</Button>
        </StHeaderSection>

        <StBodySection>
          <TodoList />
        </StBodySection>
      </StMainContainer>
    </TodoProvider>
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
