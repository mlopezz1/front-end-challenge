/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import * as Types from '../../../../apollo/generated/globalTypes';

import { gql } from '@apollo/client';
export type AuthorFragment = {
  __typename?: 'Author';
  id: number;
  name: string;
  description: string;
};

export const AuthorFragmentDoc = gql`
  fragment Author on Author {
    id
    name
    description
  }
`;
