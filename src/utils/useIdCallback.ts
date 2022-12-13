import { useCallback } from 'react';

const useIdCallback = <T, R>(cb?: (id: T) => R, id?: T) => {
  const callback = useCallback(() => {
    if (cb && id !== undefined) {
      return cb(id);
    }
    return undefined;
  }, [cb, id]);

  return callback;
};

export default useIdCallback;
