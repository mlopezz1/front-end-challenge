import { Text as DefaultText } from '$/components/Text';
import { to } from '$/styles/utils/responsive';
import styled from 'styled-components';

import ControlsBase from './Controls';
import ProgressBase from './Progress';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  left: 0;
  box-shadow: 0px -2px 8px rgba(34, 34, 61, 0.1);
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.grayscale900};

  ${to['tabletPortrait']} {
    flex-direction: column;
    gap: 12px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ImageAndInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Image = styled.img`
  aspect-ratio: 1;
  width: 48px;
  border-radius: 12px;
`;

export const InfoContainer = styled.div`
  flex-direction: column;
`;

export const Title = styled(DefaultText).attrs({
  variant: 'body2',
  color: 'white',
})``;

export const Artist = styled(DefaultText).attrs({
  variant: 'caption',
  color: 'grayscale200',
})`
  margin-top: 4px;
`;

export const Controls = styled(ControlsBase)``;

export const Progress = styled(ProgressBase)``;
