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
  UUID: any;
};

export type Cart = {
  __typename?: 'Cart';
  cartProduct?: Maybe<Array<CartProduct>>;
  id: Scalars['ID'];
};

export type CartProduct = {
  __typename?: 'CartProduct';
  amount: Scalars['Int'];
  id: Scalars['UUID'];
  product: ProductType;
};

export type CategoryType = {
  __typename?: 'CategoryType';
  id: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  error: Scalars['String'];
  field: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart: CartProduct;
  authCall: Scalars['String'];
  authVerif: UserResponse;
  editCartProductAmount: CartProduct;
  makeOrder: Order;
  userAddAddress: UserAddress;
  userEdit: UserType;
  userEditAddress: UserAddress;
};


export type MutationAddToCartArgs = {
  amount: Scalars['Int'];
  productId: Scalars['String'];
};


export type MutationAuthCallArgs = {
  phone: Scalars['String'];
};


export type MutationAuthVerifArgs = {
  otp: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationEditCartProductAmountArgs = {
  amount: Scalars['Int'];
  productId: Scalars['String'];
  productType: TypeOfProduct;
};


export type MutationMakeOrderArgs = {
  addressId: Scalars['UUID'];
};


export type MutationUserAddAddressArgs = {
  address: Scalars['String'];
  city: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postalCode: Scalars['String'];
  recipient: Scalars['String'];
};


export type MutationUserEditArgs = {
  options: UserDto;
};


export type MutationUserEditAddressArgs = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  address: UserAddress;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  items: Array<OrderItem>;
  status: OrderStatusCode;
  total: Scalars['Int'];
  updatedAt: Scalars['String'];
  user: UserType;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  atPrice: Scalars['Int'];
  id: Scalars['UUID'];
  product: ProductType;
  qty: Scalars['Int'];
};

export enum OrderStatusCode {
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  OnDelivery = 'OnDelivery',
  Progress = 'Progress',
  Unverified = 'Unverified'
}

export type ProductResponse = {
  __typename?: 'ProductResponse';
  hasNext: Scalars['Boolean'];
  nextCursor?: Maybe<Scalars['String']>;
  result: Array<ProductType>;
};

export type ProductType = {
  __typename?: 'ProductType';
  categories?: Maybe<Array<CategoryType>>;
  dicountPrice?: Maybe<Scalars['Int']>;
  howToKeep?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  imageUrl: Scalars['String'];
  information?: Maybe<Scalars['String']>;
  itemUnit: Scalars['String'];
  normalPrice: Scalars['Int'];
  nutrition?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cart: Cart;
  hello: Scalars['String'];
  order: Order;
  orders: Array<Order>;
  product: ProductType;
  products: ProductResponse;
  user: UserType;
  userGetAddress: UserAddress;
  userGetAddresses: Array<UserAddress>;
  users: Array<UserType>;
  verifyJwt: Scalars['Boolean'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  status: OrderStatusCode;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  after?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryUserArgs = {
  phone: Scalars['String'];
};


export type QueryUserGetAddressArgs = {
  id: Scalars['String'];
};


export type QueryVerifyJwtArgs = {
  token: Scalars['String'];
};

export enum TypeOfProduct {
  CartProduct = 'CART_PRODUCT',
  Product = 'PRODUCT'
}

export type UserAddress = {
  __typename?: 'UserAddress';
  address: Scalars['String'];
  city: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postalCode: Scalars['Int'];
  recipient: Scalars['String'];
};

export type UserDto = {
  displayName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
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
  id: Scalars['UUID'];
  phone: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CategoryFragment = { __typename?: 'CategoryType', id: number, slug: string, title: string };

export type ItemFragment = { __typename?: 'OrderItem', id: any, atPrice: number, qty: number, product: { __typename?: 'ProductType', id: any, title: string, slug: string, imageUrl: string, normalPrice: number, dicountPrice?: number | null | undefined, itemUnit: string, information?: string | null | undefined, nutrition?: string | null | undefined, howToKeep?: string | null | undefined, categories?: Array<{ __typename?: 'CategoryType', id: number, slug: string, title: string }> | null | undefined } };

export type OrderFragment = { __typename?: 'Order', id: string, status: OrderStatusCode, total: number, updatedAt: string, createdAt: string, items: Array<{ __typename?: 'OrderItem', id: any, atPrice: number, qty: number, product: { __typename?: 'ProductType', id: any, title: string, slug: string, imageUrl: string, normalPrice: number, dicountPrice?: number | null | undefined, itemUnit: string, information?: string | null | undefined, nutrition?: string | null | undefined, howToKeep?: string | null | undefined, categories?: Array<{ __typename?: 'CategoryType', id: number, slug: string, title: string }> | null | undefined } }>, address: { __typename?: 'UserAddress', id: any, name: string, recipient: string, phone: string, city: string, postalCode: number, address: string }, user: { __typename?: 'UserType', id: any, displayName?: string | null | undefined, phone: string, createdAt: string, updatedAt: string } };

export type ProductFragment = { __typename?: 'ProductType', id: any, title: string, slug: string, imageUrl: string, normalPrice: number, dicountPrice?: number | null | undefined, itemUnit: string, information?: string | null | undefined, nutrition?: string | null | undefined, howToKeep?: string | null | undefined, categories?: Array<{ __typename?: 'CategoryType', id: number, slug: string, title: string }> | null | undefined };

export type UserFragment = { __typename?: 'UserType', id: any, displayName?: string | null | undefined, phone: string, createdAt: string, updatedAt: string };

export type UserAddressFragment = { __typename?: 'UserAddress', id: any, name: string, recipient: string, phone: string, city: string, postalCode: number, address: string };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export type OrdersQueryVariables = Exact<{
  status: OrderStatusCode;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, status: OrderStatusCode, total: number, updatedAt: string, createdAt: string, items: Array<{ __typename?: 'OrderItem', id: any, atPrice: number, qty: number, product: { __typename?: 'ProductType', id: any, title: string, slug: string, imageUrl: string, normalPrice: number, dicountPrice?: number | null | undefined, itemUnit: string, information?: string | null | undefined, nutrition?: string | null | undefined, howToKeep?: string | null | undefined, categories?: Array<{ __typename?: 'CategoryType', id: number, slug: string, title: string }> | null | undefined } }>, address: { __typename?: 'UserAddress', id: any, name: string, recipient: string, phone: string, city: string, postalCode: number, address: string }, user: { __typename?: 'UserType', id: any, displayName?: string | null | undefined, phone: string, createdAt: string, updatedAt: string } }> };

export const CategoryFragmentDoc = gql`
    fragment Category on CategoryType {
  id
  slug
  title
}
    `;
export const ProductFragmentDoc = gql`
    fragment Product on ProductType {
  id
  title
  slug
  categories {
    ...Category
  }
  imageUrl
  normalPrice
  dicountPrice
  itemUnit
  information
  nutrition
  howToKeep
}
    ${CategoryFragmentDoc}`;
export const ItemFragmentDoc = gql`
    fragment Item on OrderItem {
  id
  atPrice
  qty
  product {
    ...Product
  }
}
    ${ProductFragmentDoc}`;
export const UserAddressFragmentDoc = gql`
    fragment UserAddress on UserAddress {
  id
  name
  recipient
  phone
  city
  postalCode
  address
}
    `;
export const UserFragmentDoc = gql`
    fragment User on UserType {
  id
  displayName
  phone
  createdAt
  updatedAt
}
    `;
export const OrderFragmentDoc = gql`
    fragment Order on Order {
  id
  status
  total
  updatedAt
  createdAt
  items {
    ...Item
  }
  address {
    ...UserAddress
  }
  user {
    ...User
  }
}
    ${ItemFragmentDoc}
${UserAddressFragmentDoc}
${UserFragmentDoc}`;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const OrdersDocument = gql`
    query Orders($status: OrderStatusCode!) {
  orders(status: $status) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;