import { FC } from 'react';

import { Container, NextButton, PlayButton, PrevButton } from './styles';
import { Props } from './types';

const Controls: FC<Props> = ({ id, className }) => (
  <Container className={className}>
    <PrevButton className="prev-button" />
    <PlayButton id={id} />
    <NextButton className="next-button" />
  </Container>
);

export default Controls;
