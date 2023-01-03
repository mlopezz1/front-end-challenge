import { Player } from '$/features/SongsList/Components/Player';
import { SongCard } from '$/features/SongsList/Components/SongCard';
import InfiniteScroll from 'react-infinite-scroller';

import useConnect from './connect';
import { Container } from './styles';

const Songs = () => {
  const { songs, handleFetchNext, hasMore, currentAudio } = useConnect();

  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleFetchNext}
        hasMore={hasMore}
        loader={
          <div key={'loader'} className="loader">
            Loading ...
          </div>
        }
      >
        {songs.map((song, index) => (
          <SongCard
            id={song.id}
            key={song.id + '_' + index.toString()}
            title={song.name}
            artist={song.artist}
            description={song.description}
            image={song.image}
          />
        ))}
      </InfiniteScroll>
      {currentAudio && (
        <Player
          id={currentAudio.id}
          title={currentAudio.name}
          artist={currentAudio.artist}
          image={currentAudio.image}
        />
      )}
    </Container>
  );
};

export default Songs;
