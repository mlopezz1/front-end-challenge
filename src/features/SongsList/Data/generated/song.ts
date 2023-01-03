/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import * as Types from '../../../../apollo/generated/globalTypes';

import { gql } from '@apollo/client';
import { AuthorFragmentDoc } from './author';
import { AudioFragmentDoc } from './audio';
import { PageMetaFragmentDoc } from './pageMeta';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type SongFragment = {
  __typename?: 'Song';
  id: number;
  name: string;
  description: string;
  genre: Types.MusicGenre;
  image: string;
  author: {
    __typename?: 'Author';
    id: number;
    name: string;
    description: string;
  };
  audio: { __typename?: 'Audio'; id: number; url: string; autoPlay: boolean };
};

export type SongsQueryVariables = Types.Exact<{
  pagination?: Types.InputMaybe<Types.PaginationInput>;
  search?: Types.InputMaybe<Types.Scalars['String']>;
  sort?: Types.InputMaybe<Types.SortInput>;
}>;

export type SongsQuery = {
  __typename?: 'Query';
  songs: {
    __typename?: 'SongResponse';
    songs: Array<{
      __typename?: 'Song';
      id: number;
      name: string;
      description: string;
      genre: Types.MusicGenre;
      image: string;
      author: {
        __typename?: 'Author';
        id: number;
        name: string;
        description: string;
      };
      audio: {
        __typename?: 'Audio';
        id: number;
        url: string;
        autoPlay: boolean;
      };
    }>;
    pageMeta: {
      __typename?: 'PageMeta';
      total: number;
      page: number;
      pages: number;
    };
  };
};

export const SongFragmentDoc = gql`
  fragment Song on Song {
    id
    name
    author {
      ...Author
    }
    description
    audio {
      ...Audio
    }
    genre
    image
  }
  ${AuthorFragmentDoc}
  ${AudioFragmentDoc}
`;
export const SongsDocument = gql`
  query Songs($pagination: PaginationInput, $search: String, $sort: SortInput) {
    songs(pagination: $pagination, search: $search, sort: $sort) {
      songs {
        ...Song
      }
      pageMeta {
        ...PageMeta
      }
    }
  }
  ${SongFragmentDoc}
  ${PageMetaFragmentDoc}
`;
export function useSongsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SongsQuery,
    SongsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<SongsQuery, SongsQueryVariables>(
    SongsDocument,
    options,
  );
}
export function useSongsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SongsQuery,
    SongsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<SongsQuery, SongsQueryVariables>(
    SongsDocument,
    options,
  );
}
export type SongsQueryHookResult = ReturnType<typeof useSongsQuery>;
export type SongsLazyQueryHookResult = ReturnType<typeof useSongsLazyQuery>;
export type SongsQueryResult = ApolloReactCommon.QueryResult<
  SongsQuery,
  SongsQueryVariables
>;
