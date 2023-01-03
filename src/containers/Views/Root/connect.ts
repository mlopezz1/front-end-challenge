import { useApolloSetup } from '$/apollo/client';
import { noop } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

const useConnect = () => {
  const { initApollo, apolloClient } = useApolloSetup();
  const [ready, setReady] = useState(false);

  const handleInit = useCallback(() => {
    try {
      initApollo();
    } catch {
      noop();
    } finally {
      setReady(true);
    }
  }, [initApollo]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  return {
    ready,
    apolloClient,
  };
};

export default useConnect;
