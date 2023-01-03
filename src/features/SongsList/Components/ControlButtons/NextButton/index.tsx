import type { FC } from 'react';
import { memo } from 'react';

import useLogic from './logic';
import { Button, NextIcon } from './styles';
import type { Props } from './types';

const NextButton: FC<Props> = ({ className }) => {
  const { handlePressNext } = useLogic();

  return (
    <Button onClick={handlePressNext} className={className}>
      <NextIcon />
    </Button>
  );
};

export default memo(NextButton);
