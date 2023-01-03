import PauseIconBase from 'src/assets/icons/pause.svg';
import PlayIconBase from 'src/assets/icons/play-fill.svg';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: unset;
  background-color: ${({ theme }) => theme.color.grayscale900};
`;

export const PlayIcon = styled(PlayIconBase)`
  color: ${({ theme }) => theme.color.white};
`;

export const PauseIcon = styled(PauseIconBase)`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.color.white};
`;
