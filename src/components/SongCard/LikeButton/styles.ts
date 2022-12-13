import HeartIconBase from '$/assets/icons/heart-fill.svg';
import HeartOutlineIconBase from '$/assets/icons/heart-outline.svg';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  background-color: ${({ theme }) => theme.color.transparent};
`;

export const LikeIcon = styled(HeartOutlineIconBase)``;

export const LikeIconActive = styled(HeartIconBase)``;
