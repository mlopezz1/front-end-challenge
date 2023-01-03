import { Text as DefaultText } from '$/components/Text';
import { LikeButton as LikeButtonBase } from '$/features/SongsList/Components/ControlButtons';
import { to } from '$/styles/utils/responsive';
import styled from 'styled-components';

import ControlsBase from './Controls';
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 16px;

  ${to['tabletPortrait']} {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const Image = styled.img`
  aspect-ratio: 1;
  width: 140px;
  border-radius: 12px;
`;

export const InfoContainer = styled.div`
  flex: 1;
  margin-left: 20px;

  ${to['tabletPortrait']} {
    margin-left: 0;
  }
`;

export const Title = styled(DefaultText).attrs({
  variant: 'bodyBold',
  color: 'grayscale900',
})``;

export const Artist = styled(DefaultText).attrs({
  variant: 'body2Medium',
})`
  color: ${({ theme }) => theme.color.grayscale700};
  margin-top: 4px;
`;

export const Description = styled(DefaultText).attrs({
  variant: 'body2',
  maxLines: 2,
})`
  color: ${({ theme }) => theme.color.grayscale700};
  margin-top: 4px;
`;

export const Controls = styled(ControlsBase)``;

export const LikeButton = styled(LikeButtonBase)`
  margin-left: 10vw;

  ${to['tabletPortrait']} {
    margin-left: 0;
  }
`;
