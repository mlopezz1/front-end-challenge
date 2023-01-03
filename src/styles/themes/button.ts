import { css } from 'styled-components';

export const Button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  background-color: ${({ theme }) => theme.color.transparent};
`;
