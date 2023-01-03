import PlayButton from '$/features/SongsList/Components/ControlButtons/PlayButton';
import { FC } from 'react';

import { Category, CategoryContainer, Container, Duration } from './styles';
import { Props } from './types';

const Controls: FC<Props> = ({ id, category, duration, className }) => (
  <Container className={className}>
    <PlayButton id={id} />
    {duration && <Duration tag="p">{duration}</Duration>}
    {category && (
      <CategoryContainer>
        <Category tag="p">{category}</Category>
      </CategoryContainer>
    )}
  </Container>
);

export default Controls;
