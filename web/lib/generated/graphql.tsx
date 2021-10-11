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
  displayName: Scalars['String'];
  /** add unique email */
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  error: Scalars['String'];
  field: Scalars['String'];
};

export type LoginDto = {
  email: Scalars['String'];
  password: Scalars['String'];
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
  users: Array<UserType>;
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
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type ErrorFragmentFragment = { __typename?: 'FieldError', error: string, field: string };

export type UserFragmentFragment = { __typename?: 'UserType', id: number, email?: string | null | undefined, username: string, displayName: string, phone?: string | null | undefined, createdAt: string, updatedAt: string };

export type RegisterMutationVariables = Exact<{
  options: CreateUserDto;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', token?: string | null | undefined, error?: Array<{ __typename?: 'FieldError', error: string, field: string }> | null | undefined, user?: { __typename?: 'UserType', id: number, email?: string | null | undefined, username: string, displayName: string, phone?: string | null | undefined, createdAt: string, updatedAt: string } | null | undefined } };

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