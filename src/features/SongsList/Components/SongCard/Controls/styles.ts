import PauseIconBase from '$/assets/icons/pause.svg';
import PlayIconBase from '$/assets/icons/play-fill.svg';
import { Text as DefaultText } from '$/components/Text';
import styled from 'styled-components';

export const Container = styled.div`
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
