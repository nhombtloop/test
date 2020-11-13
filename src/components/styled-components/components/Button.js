import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : 'palevioletred')};
  font-weight: bold;
  padding: 0.25rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transition: all 1s;
  }
`;

export const BigButton = styled(Button)`
  font-size: 2em;
`;
