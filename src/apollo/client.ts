import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { useCallback, useState } from 'react';

import fragmentMatcher from './generated/fragmentMatcher';
export let apolloClientRef: ApolloClient<NormalizedCacheObject> | null = null;

export const buildApolloClient = () => {
  const httpLink = createHttpLink({
    uri: process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT'],
  });

  const cache = new InMemoryCache({
    ...fragmentMatcher,
  });

  const client = new ApolloClient({
    cache,
    link: httpLink,
  });

  return client;
};

export const useApolloSetup = () => {
  const [apolloClient, setApolloClient] =
    useState<ApolloClient<NormalizedCacheObject>>();

  const initApollo = useCallback(() => {
    const client = buildApolloClient();
    setApolloClient(client);
    apolloClientRef = client;
  }, []);

  return {
    initApollo,
    apolloClient,
  };
};
