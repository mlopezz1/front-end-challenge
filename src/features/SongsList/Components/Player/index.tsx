import { LikeButton } from '$/features/SongsList/Components/ControlButtons';
import { FC } from 'react';

import {
  Artist,
  Container,
  Controls,
  DataContainer,
  Image,
  ImageAndInfoContainer,
  InfoContainer,
  Title,
  Progress,
} from './styles';
import { Props } from './types';

export const Player: FC<Props> = ({ id, title, image, artist, className }) => (
  <Container className={className}>
    <DataContainer>
      <LikeButton id={id} className="like-button" />
      <ImageAndInfoContainer>
        <Image src={image} alt={title} />
        <InfoContainer>
          <Title tag="h1">{title}</Title>
          <Artist tag="h2">{artist}</Artist>
        </InfoContainer>
      </ImageAndInfoContainer>
    </DataContainer>
    <Controls id={id} className="controls" />
    <Progress className="progress" />
  </Container>
);
