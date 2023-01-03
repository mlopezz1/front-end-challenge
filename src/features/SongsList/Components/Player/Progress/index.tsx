import React, { FC } from 'react';

import useLogic from './logic';
import { Container, ProgressBar, ProgressContainer, TimeText } from './styles';
import { Props } from './types';

const Progress: FC<Props> = ({ className }) => {
  const { currentTime, currentDuration, time, handleProgressChange, duration } =
    useLogic();
  return (
    <Container className={className}>
      <TimeText tag="p">{currentTime}</TimeText>
      <ProgressContainer>
        <ProgressBar
          value={time}
          step={1}
          min={0}
          max={duration}
          onChange={handleProgressChange}
        />
      </ProgressContainer>
      <TimeText tag="p">{currentDuration}</TimeText>
    </Container>
  );
};

export default Progress;
