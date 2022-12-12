import { FC } from 'react';

import {
  Artist,
  Category,
  CategoryContainer,
  Container,
  ControlsContainer,
  Description,
  Duration,
  Image,
  InfoContainer,
  LikeButton,
  LikeContainer,
  LikeIcon,
  PlayButton,
  PlayIcon,
  Title,
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
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
      <Description>{description}</Description>
      <ControlsContainer>
        <PlayButton>
          <PlayIcon />
        </PlayButton>
        <Duration tag="p">{duration}</Duration>
        <CategoryContainer>
          <Category>{category}</Category>
        </CategoryContainer>
      </ControlsContainer>
    </InfoContainer>
    <LikeContainer>
      <LikeButton>
        <LikeIcon />
      </LikeButton>
    </LikeContainer>
  </Container>
);
