import { usePlayerStore } from '$/features/SongsList/Stores';
import { useCallback } from 'react';

const useLogic = () => {
  const { playPrev } = usePlayerStore();

  const handlePressPrev = useCallback(() => {
    playPrev();
  }, [playPrev]);

  return {
    handlePressPrev,
  };
};

export default useLogic;
