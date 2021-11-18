import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<Scalars['String']>;
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
  after?: InputMaybe<Scalars['String']>;
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
  displayName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
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

export function useHelloQuery(options: Omit<Urql.UseQueryArgs<HelloQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<HelloQuery>({ query: HelloDocument, ...options });
};
export const OrdersDocument = gql`
    query Orders($status: OrderStatusCode!) {
  orders(status: $status) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;

export function useOrdersQuery(options: Omit<Urql.UseQueryArgs<OrdersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OrdersQuery>({ query: OrdersDocument, ...options });
};