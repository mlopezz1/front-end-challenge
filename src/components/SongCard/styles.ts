import { Text as DefaultText } from '$/components/Text';
import styled from 'styled-components';

import ControlsBase from './Controls';
import LikeButtonBase from './LikeButton';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const Image = styled.img`
  aspect-ratio: 1;
  width: 148px;
  border-radius: 12px;
`;

export const InfoContainer = styled.div`
  flex: 1;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 5%;
    right: 12px;
  }
`;
