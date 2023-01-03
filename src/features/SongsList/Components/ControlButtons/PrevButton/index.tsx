import type { FC } from 'react';
import { memo } from 'react';

import useLogic from './logic';
import { Button, PrevIcon } from './styles';
import type { Props } from './types';

const PrevButton: FC<Props> = ({ className }) => {
  const { handlePressPrev } = useLogic();

  return (
    <Button onClick={handlePressPrev} className={className}>
      <PrevIcon />
    </Button>
  );
};

export default memo(PrevButton);
