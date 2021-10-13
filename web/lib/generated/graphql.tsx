import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserDto = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  error: Scalars['String'];
  field: Scalars['String'];
};

export type LoginDto = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: UserResponse;
  register: UserResponse;
};


export type MutationLoginArgs = {
  options: LoginDto;
};


export type MutationRegisterArgs = {
  options: CreateUserDto;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  user: UserType;
  users: Array<UserType>;
  verifyJwt: Scalars['Boolean'];
};


export type QueryUserArgs = {
  pk: Scalars['Int'];
};


export type QueryVerifyJwtArgs = {
  token: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<Array<FieldError>>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserType>;
};

export type UserType = {
  __typename?: 'UserType';
  createdAt: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type ErrorFragmentFragment = { __typename?: 'FieldError', error: string, field: string };

export type UserFragmentFragment = { __typename?: 'UserType', id: number, email?: string | null | undefined, username: string, displayName?: string | null | undefined, phone?: string | null | undefined, createdAt: string, updatedAt: string };

export type LoginMutationVariables = Exact<{
  options: LoginDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', token?: string | null | undefined, error?: Array<{ __typename?: 'FieldError', error: string, field: string }> | null | undefined, user?: { __typename?: 'UserType', id: number, email?: string | null | undefined, username: string, displayName?: string | null | undefined, phone?: string | null | undefined, createdAt: string, updatedAt: string } | null | undefined } };

export type RegisterMutationVariables = Exact<{
  options: CreateUserDto;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', token?: string | null | undefined, error?: Array<{ __typename?: 'FieldError', error: string, field: string }> | null | undefined, user?: { __typename?: 'UserType', id: number, email?: string | null | undefined, username: string, displayName?: string | null | undefined, phone?: string | null | undefined, createdAt: string, updatedAt: string } | null | undefined } };

export type GetUserQueryVariables = Exact<{
  pk: Scalars['Int'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'UserType', id: number, email?: string | null | undefined, username: string, displayName?: string | null | undefined, phone?: string | null | undefined, createdAt: string, updatedAt: string } };

export type VerifyJwtQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyJwtQuery = { __typename?: 'Query', verifyJwt: boolean };

export const ErrorFragmentFragmentDoc = gql`
    fragment ErrorFragment on FieldError {
  error
  field
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on UserType {
  id
  email
  username
  displayName
  phone
  createdAt
  updatedAt
}
    `;
export const LoginDocument = gql`
    mutation Login($options: LoginDto!) {
  login(options: $options) {
    error {
      ...ErrorFragment
    }
    user {
      ...UserFragment
    }
    token
  }
}
    ${ErrorFragmentFragmentDoc}
${UserFragmentFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: CreateUserDto!) {
  register(options: $options) {
    error {
      ...ErrorFragment
    }
    user {
      ...UserFragment
    }
    token
  }
}
    ${ErrorFragmentFragmentDoc}
${UserFragmentFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetUserDocument = gql`
    query GetUser($pk: Int!) {
  user(pk: $pk) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      pk: // value for 'pk'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const VerifyJwtDocument = gql`
    query VerifyJWT($token: String!) {
  verifyJwt(token: $token)
}
    `;

/**
 * __useVerifyJwtQuery__
 *
 * To run a query within a React component, call `useVerifyJwtQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyJwtQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyJwtQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyJwtQuery(baseOptions: Apollo.QueryHookOptions<VerifyJwtQuery, VerifyJwtQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyJwtQuery, VerifyJwtQueryVariables>(VerifyJwtDocument, options);
      }
export function useVerifyJwtLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyJwtQuery, VerifyJwtQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyJwtQuery, VerifyJwtQueryVariables>(VerifyJwtDocument, options);
        }
export type VerifyJwtQueryHookResult = ReturnType<typeof useVerifyJwtQuery>;
export type VerifyJwtLazyQueryHookResult = ReturnType<typeof useVerifyJwtLazyQuery>;
export type VerifyJwtQueryResult = Apollo.QueryResult<VerifyJwtQuery, VerifyJwtQueryVariables>;