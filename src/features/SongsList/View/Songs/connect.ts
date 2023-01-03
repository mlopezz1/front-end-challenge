import { useSongs } from '$/features/SongsList/Data';
import { usePlayerStore } from '$/features/SongsList/Stores';
import { useCallback, useEffect } from 'react';

const useConnect = () => {
  const { songs, fetchMore, hasMore, pages, error, loading } = useSongs({});
  const { setAudioList } = usePlayerStore();

  const { currentAudio } = usePlayerStore((state) => ({
    currentAudio: state.currentAudio,
  }));

  const handleFetchNext = useCallback(async () => {
    try {
      await fetchMore();
    } catch (err) {
      console.error(err);
    }
  }, [fetchMore]);

  useEffect(() => {
    if (!loading && !error && songs) {
      setAudioList(songs);
    }
  }, [loading, error, songs, setAudioList]);

  return {
    currentAudio,
    songs,
    pages,
    hasMore,
    handleFetchNext,
    loading,
    error,
  };
};

export default useConnect;
