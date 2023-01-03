import { usePlayerStore } from '$/features/SongsList/Stores';
import { useCallback } from 'react';

const useLogic = () => {
  const { playNext } = usePlayerStore();

  const handlePressNext = useCallback(() => {
    playNext();
  }, [playNext]);

  return {
    handlePressNext,
  };
};

export default useLogic;
