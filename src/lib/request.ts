import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { RequestDocument, Variables, request as graphqlRequest } from 'graphql-request';

export function request<TDocument = any, TVariables = Record<string, any>>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables
) {
  return graphqlRequest<TDocument, Variables>('https://graphql.datocms.com/', document, variables, {
    Authorization: process.env.NEXT_DATOCMS_API_TOKEN as string,
    'X-Exclude-Invalid': 'true',
  });
}
