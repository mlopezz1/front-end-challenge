import {
  NextButton as NextButtonBase,
  PlayButton as PlayButtonBase,
  PrevButton as PrevButtonBase,
} from '$/features/SongsList/Components/ControlButtons';
import {
  PauseIcon,
  PlayIcon,
} from '$/features/SongsList/Components/ControlButtons/PlayButton/styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const NextButton = styled(NextButtonBase)``;
export const PrevButton = styled(PrevButtonBase)``;

export const Icon = css`
  width: 24px;
  height: 24px;
  & path {
    fill: ${({ theme }) => theme.color.grayscale900};
  }
`;

export const PlayButton = styled(PlayButtonBase)`
  background-color: ${({ theme }) => theme.color.white};
  ${PlayIcon} {
    ${Icon}
  }
  ${PauseIcon} {
    ${Icon}
  }
`;
