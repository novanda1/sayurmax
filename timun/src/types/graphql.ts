export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  Progress = 'Progress'
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
  orders: Order;
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

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };
