import { SongFragment } from '$/features/SongsList/Data/generated/song';

export const normalizeSong = ({
  id,
  name,
  description,
  image,
  author,
  audio,
}: SongFragment) => ({
  id: id.toString(),
  name,
  description,
  image,
  artist: author.name,
  audio: audio.url,
  like: false,
});

export type Song = ReturnType<typeof normalizeSong>;
