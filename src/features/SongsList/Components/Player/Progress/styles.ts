import { Text as DefaultText } from '$/components/Text';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const TimeText = styled(DefaultText).attrs({
  variant: 'caption',
  color: 'white',
})`
  width: 42px;
`;

export const ProgressContainer = styled.div`
  max-width: 552px;
  min-width: 25vw;
  margin: 0 12px;
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled(Slider)`
  height: 4px;
  & .MuiSlider-thumb {
    color: white;
    width: 10px;
    height: 10px;
  }
  & .MuiSlider-rail {
    color: ${({ theme }) => theme.color.grayscale700};
  }
  & .MuiSlider-track {
    color: ${({ theme }) => theme.color.malibu500};
  }
`;
