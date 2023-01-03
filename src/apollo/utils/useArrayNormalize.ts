import { useMemo, useRef } from 'react';

const useArrayNormalize = <T, R>(
  inputArray: T[],
  normalizer: (input: T) => R,
) => {
  const prevInputArray = useRef<T[] | null>(null);
  const prevOutputArray = useRef<R[] | null>(null);

  return useMemo(() => {
    const output = inputArray?.map((item, index) => {
      const prevItem = prevInputArray.current?.[index];
      return item === prevItem
        ? prevOutputArray.current?.[index]
        : normalizer(item);
    }) as R[];

    prevOutputArray.current = output;
    prevInputArray.current = inputArray;

    return output;
  }, [inputArray, normalizer]);
};

export default useArrayNormalize;
