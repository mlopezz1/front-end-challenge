import HeartIconFillBase from '$/assets/icons/heart-fill.svg';
import HeartIconBase from '$/assets/icons/heart-outline.svg';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  background-color: ${({ theme }) => theme.color.transparent};
`;

export const HeartIcon = styled(HeartIconBase)``;

export const HeartFillIcon = styled(HeartIconFillBase)``;
