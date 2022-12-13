export type Props = {
  id: string;
  title: string;
  artist: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  isPlaying: boolean;
  isLiked: boolean;
  onClickLike: (id: string) => void;
  onClickPlay: (id: string) => void;
  className?: string;
};
