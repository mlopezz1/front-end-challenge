import { FC } from 'react';

import {
  Artist,
  Container,
  Controls,
  Description,
  Image,
  InfoContainer,
  Title,
  LikeButton,
} from './styles';
import { Props } from './types';

export const SongCard: FC<Props> = ({
  id,
  title,
  category,
  description,
  image,
  duration,
  artist,
  className,
}) => (
  <Container className={className}>
    <Image src={image} alt={title} />
    <InfoContainer>
      <Title tag="h1">{title}</Title>
      <Artist tag="h2">{artist}</Artist>
      <Description tag="p">{description}</Description>
      <Controls
        category={category}
        duration={duration}
        id={id}
        className="controls"
      />
    </InfoContainer>
    <LikeButton id={id} className="like-button" />
  </Container>
);
