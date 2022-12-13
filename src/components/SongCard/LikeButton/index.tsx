import { FC } from 'react';

import { Button, Container, LikeIcon, LikeIconActive } from './styles';
import { Props } from './types';

const LikeButton: FC<Props> = ({ isLiked, onClick, className }) => (
  <Container className={className}>
    <Button onClick={onClick}>
      {isLiked ? <LikeIconActive /> : <LikeIcon />}
    </Button>
  </Container>
);

export default LikeButton;
