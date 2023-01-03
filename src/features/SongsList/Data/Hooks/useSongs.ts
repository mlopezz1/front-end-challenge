import { buildExceptionFromApolloError } from '$/apollo/exception';
import { SortInput } from '$/apollo/generated/globalTypes';
import { applyIfSome } from '$/apollo/utils/functional';
import useArrayNormalize from '$/apollo/utils/useArrayNormalize';
import {
  SongsQueryVariables,
  useSongsQuery,
} from '$/features/SongsList/Data/generated/song';
import { normalizeSong } from '$/features/SongsList/Models/Song';
import { produce } from 'immer';
import { useCallback, useMemo } from 'react';

const SONGS_PAGE_SIZE = 5;

type Props = {
  search?: string;
  sort?: SortInput;
};

const useSongs = ({ search, sort }: Props) => {
  const {
    data,
    loading,
    refetch,
    fetchMore: fetchMoreSongs,
    error: apolloError,
    ...other
  } = useSongsQuery({
    variables: {
      pagination: {
        offset: 0,
        limit: SONGS_PAGE_SIZE,
      },
      search,
      sort,
    },
  });

  const songs = useArrayNormalize(data?.songs?.songs ?? [], normalizeSong);
  const pages = data?.songs?.pageMeta?.pages ?? 1;

  const hasMore = songs.length < pages * SONGS_PAGE_SIZE;

  const fetchMore = useCallback(async () => {
    await fetchMoreSongs({
      variables: {
        pagination: {
          offset: songs.length,
          limit: SONGS_PAGE_SIZE,
        },
      },
      updateQuery: (prev, { fetchMoreResult }) =>
        produce(prev, (draft) => {
          if (!!fetchMoreResult?.songs?.songs) {
            draft.songs.songs.push(...fetchMoreResult.songs.songs);
          }
        }),
    });
  }, [fetchMoreSongs, songs.length]);

  const error = useMemo(
    () => applyIfSome(buildExceptionFromApolloError, apolloError),
    [apolloError],
  );

  return {
    songs,
    fetchMore,
    loading,
    pages,
    hasMore,
    error,
  };
};
export default useSongs;
