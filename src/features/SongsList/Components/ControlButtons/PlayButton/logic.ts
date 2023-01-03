import { usePlayerStore } from '$/features/SongsList/Stores';
import { useCallback } from 'react';

import { LogicProps } from './types';

const useLogic = ({ id }: LogicProps) => {
  const { play, pause, resume } = usePlayerStore();
  const {
    isPlaying,
    id: currentPlayingId,
    audioList,
  } = usePlayerStore((state) => ({
    isPlaying: state.isPlaying,
    id: state.currentAudio?.id,
    audioList: state.audioList,
  }));

  const handlePressPlay = useCallback(() => {
    const audio = audioList.find((a) => a.id === id);
    if (!audio) return;
    if (audio.id !== currentPlayingId) {
      play(audio);
    } else {
      if (isPlaying) {
        pause();
      } else {
        resume();
      }
    }
  }, [audioList, currentPlayingId, id, play, isPlaying, pause, resume]);

  return {
    handlePressPlay,
    isPlaying: isPlaying && currentPlayingId === id,
  };
};

export default useLogic;
