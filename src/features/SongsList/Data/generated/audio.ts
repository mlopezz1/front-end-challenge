/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import * as Types from '../../../../apollo/generated/globalTypes';

import { gql } from '@apollo/client';
export type AudioFragment = {
  __typename?: 'Audio';
  id: number;
  url: string;
  autoPlay: boolean;
};

export const AudioFragmentDoc = gql`
  fragment Audio on Audio {
    id
    url
    autoPlay
  }
`;
