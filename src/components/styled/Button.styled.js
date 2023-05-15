import styled from 'styled-components';
import { Colors } from '../Theme';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(
    to right,
    ${Colors.Gradients.PrimaryToSec[0]},
    ${Colors.Gradients.PrimaryToSec[1]}
  );
  font-weight: 500;
  width: max-content;
  font-weight: 500;
  color: ${Colors.White};
  border-radius: ${(p) => (p.round ? '50px' : '5px')};
`;

export default Button;
