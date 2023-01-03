import type { FC } from 'react';
import { memo } from 'react';

import useLogic from './logic';
import { Button, HeartFillIcon, HeartIcon } from './styles';
import type { Props } from './types';

const LikeButton: FC<Props> = ({ className, id }) => {
  const { like, handlePressLike } = useLogic({
    id,
  });

  return (
    <Button onClick={handlePressLike} className={className}>
      {like ? <HeartFillIcon /> : <HeartIcon />}
    </Button>
  );
};

export default memo(LikeButton);
