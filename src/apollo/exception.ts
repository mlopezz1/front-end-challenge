import { CustomError } from '$/globals/Models/CustomError';
import { ApolloError } from '@apollo/client';

type ExtensionError = Record<string, string[]>;

export const buildExceptionFromApolloError = (error: unknown): CustomError => {
  if (!(error instanceof ApolloError)) return error as CustomError;

  if (error.networkError) return new CustomError(error.message);

  const graphqlError = error.graphQLErrors?.[0] ?? undefined;
  if (!graphqlError || !graphqlError.extensions)
    return new CustomError(error.message);

  const fields = Object.values(
    graphqlError.extensions as ExtensionError,
  ).flat();

  return new CustomError(graphqlError.message, fields);
};
