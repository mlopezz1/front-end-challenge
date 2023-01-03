/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import * as Types from '../../../../apollo/generated/globalTypes';

import { gql } from '@apollo/client';
export type PageMetaFragment = {
  __typename?: 'PageMeta';
  total: number;
  page: number;
  pages: number;
};

export const PageMetaFragmentDoc = gql`
  fragment PageMeta on PageMeta {
    total
    page
    pages
  }
`;
