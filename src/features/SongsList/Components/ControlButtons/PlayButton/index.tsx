import type { FC } from 'react';
import { memo } from 'react';

import useLogic from './logic';
import { Button, PauseIcon, PlayIcon } from './styles';
import type { Props } from './types';

const PlayButton: FC<Props> = ({ className, id }) => {
  const { isPlaying, handlePressPlay } = useLogic({
    id,
  });

  return (
    <Button onClick={handlePressPlay} className={className}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </Button>
  );
};

export default memo(PlayButton);
