import { usePlayerStore } from '$/features/SongsList/Stores';
import { convertToMinutesAndSeconds } from '$/utils/convertToMinutesAndSeconds';
import { useCallback, useMemo } from 'react';

const useLogic = () => {
  const { updateCurrentTime } = usePlayerStore();
  const { time, duration } = usePlayerStore((state) => ({
    time: state.currentTime,
    duration: state.duration ?? 0,
  }));

  const currentDuration = useMemo(
    () => convertToMinutesAndSeconds(duration),
    [duration],
  );
  const currentTime = useMemo(() => convertToMinutesAndSeconds(time), [time]);

  const handleProgressChange = useCallback(
    (_event: any, newValue: number | number[]) => {
      if (Array.isArray(newValue)) return;
      updateCurrentTime(newValue);
    },
    [updateCurrentTime],
  );

  return {
    currentDuration,
    currentTime,
    time,
    handleProgressChange,
    duration,
  };
};

export default useLogic;
