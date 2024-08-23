import styled from 'styled-components';

const StButton = styled.button`
  border: none;
  border-radius: 6px;
`;
const Button = ({ children, onClick }) => {
  console.log('Children', children);
  return <StButton onClick={onClick}>{children}</StButton>;
};

export default Button;
