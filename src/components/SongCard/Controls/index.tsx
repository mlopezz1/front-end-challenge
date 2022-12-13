import { FC } from 'react';

import {
  Category,
  CategoryContainer,
  Container,
  Duration,
  PauseIcon,
  PlayButton,
  PlayIcon,
} from './styles';
import { Props } from './types';

const Controls: FC<Props> = ({ isPlaying, category, duration, className }) => (
  <Container className={className}>
    <PlayButton>{isPlaying ? <PauseIcon /> : <PlayIcon />}</PlayButton>
    <Duration tag="p">{duration}</Duration>
    <CategoryContainer>
      <Category tag="p">{category}</Category>
    </CategoryContainer>
  </Container>
);

export default Controls;
