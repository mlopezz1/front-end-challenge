import PlayIconBase from '$/assets/icons/play-fill.svg';
import { Text as DefaultText } from '$/components/Text';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  aspect-ratio: 1;
  width: 148px;
`;

export const InfoContainer = styled.div`
  margin-left: 20px;
  flex: 2;
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

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  gap: 12px;
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grayscale900};
`;

export const PlayIcon = styled(PlayIconBase)`
  color: ${({ theme }) => theme.color.white};
`;

export const Duration = styled(DefaultText).attrs({
  variant: 'caption',
})`
  color: ${({ theme }) => theme.color.grayscale700};
`;

export const CategoryContainer = styled.div`
  background-color: ${({ theme }) => theme.color.malibu100};
  padding: 4px 8px;
  border-radius: 47px;
`;

export const Category = styled(DefaultText).attrs({
  variant: 'caption',
})`
  color: ${({ theme }) => theme.color.grayscale900};
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grayscale900};
`;

export const LikeIcon = styled(PlayIconBase)``;
