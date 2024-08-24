import { useContext } from 'react';
import styled from 'styled-components';
import { TodoDispatchContext } from '../context/todoContext';

const StButton = styled.button`
  border: none;
  border-radius: 6px;
`;
const Button = ({ children, inputRef }) => {
  const dispatch = useContext(TodoDispatchContext);

  return (
    <StButton
      onClick={() => {
        dispatch({
          type: 'add',
        });
        inputRef.current.focus();
      }}
    >
      {children}
    </StButton>
  );
};

export default Button;
