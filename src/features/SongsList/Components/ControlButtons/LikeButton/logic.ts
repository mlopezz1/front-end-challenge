import { usePlayerStore } from '$/features/SongsList/Stores';
import { useCallback } from 'react';

import { LogicProps } from './types';

const useLogic = ({ id }: LogicProps) => {
  const { toggleLike } = usePlayerStore();
  const { like } = usePlayerStore((state) => ({
    like: state.audioList.find((a) => a.id === id)?.like,
  }));

  const handlePressLike = useCallback(() => {
    toggleLike(id);
  }, [id, toggleLike]);

  return {
    handlePressLike,
    like,
  };
};

export default useLogic;
