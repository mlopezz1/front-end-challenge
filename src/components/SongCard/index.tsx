import useIdCallback from '$/utils/useIdCallback';
import { FC } from 'react';

import {
  Artist,
  Container,
  Controls,
  Description,
  Image,
  InfoContainer,
  LikeButton,
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
  isLiked,
  isPlaying,
  onClickLike,
  onClickPlay,
}) => {
  const handlePressPlay = useIdCallback(onClickPlay, id);
  const handlePressLike = useIdCallback(onClickLike, id);
  return (
    <Container className={className}>
      <Image src={image} alt={title} />
      <InfoContainer>
        <Title tag="h1">{title}</Title>
        <Artist tag="h2">{artist}</Artist>
        <Description tag="p">{description}</Description>
        <Controls
          category={category}
          duration={duration}
          isPlaying={isPlaying}
          onClick={handlePressPlay}
          className="controls"
        />
      </InfoContainer>
      <LikeButton
        isLiked={isLiked}
        onClick={handlePressLike}
        className="like-button"
      />
    </Container>
  );
};
