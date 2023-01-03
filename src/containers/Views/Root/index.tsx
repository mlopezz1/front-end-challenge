import { ApolloProvider } from '@apollo/client';
import { FC } from 'react';

import useConnect from './connect';
import { Props } from './types';

const Root: FC<Props> = ({ children }) => {
  const { ready, apolloClient } = useConnect();

  if (!ready || !apolloClient) return null;

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default Root;
