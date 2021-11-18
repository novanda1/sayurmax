export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    UUID: any;
};
export declare type Cart = {
    __typename?: 'Cart';
    cartProduct?: Maybe<Array<CartProduct>>;
    id: Scalars['ID'];
};
export declare type CartProduct = {
    __typename?: 'CartProduct';
    amount: Scalars['Int'];
    id: Scalars['UUID'];
    product: ProductType;
};
export declare type CategoryType = {
    __typename?: 'CategoryType';
    id: Scalars['Int'];
    slug: Scalars['String'];
    title: Scalars['String'];
};
export declare type FieldError = {
    __typename?: 'FieldError';
    error: Scalars['String'];
    field: Scalars['String'];
};
export declare type Mutation = {
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
export declare type MutationAddToCartArgs = {
    amount: Scalars['Int'];
    productId: Scalars['String'];
};
export declare type MutationAuthCallArgs = {
    phone: Scalars['String'];
};
export declare type MutationAuthVerifArgs = {
    otp: Scalars['String'];
    phone: Scalars['String'];
};
export declare type MutationEditCartProductAmountArgs = {
    amount: Scalars['Int'];
    productId: Scalars['String'];
    productType: TypeOfProduct;
};
export declare type MutationMakeOrderArgs = {
    addressId: Scalars['UUID'];
};
export declare type MutationUserAddAddressArgs = {
    address: Scalars['String'];
    city: Scalars['String'];
    name: Scalars['String'];
    phone: Scalars['String'];
    postalCode: Scalars['String'];
    recipient: Scalars['String'];
};
export declare type MutationUserEditArgs = {
    options: UserDto;
};
export declare type MutationUserEditAddressArgs = {
    address?: InputMaybe<Scalars['String']>;
    city?: InputMaybe<Scalars['String']>;
    id: Scalars['UUID'];
    name?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    postalCode?: InputMaybe<Scalars['String']>;
    recipient?: InputMaybe<Scalars['String']>;
};
export declare type Order = {
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
export declare type OrderItem = {
    __typename?: 'OrderItem';
    atPrice: Scalars['Int'];
    id: Scalars['UUID'];
    product: ProductType;
    qty: Scalars['Int'];
};
export declare enum OrderStatusCode {
    Cancelled = "Cancelled",
    Completed = "Completed",
    OnDelivery = "OnDelivery",
    Progress = "Progress",
    Unverified = "Unverified"
}
export declare type ProductResponse = {
    __typename?: 'ProductResponse';
    hasNext: Scalars['Boolean'];
    nextCursor?: Maybe<Scalars['String']>;
    result: Array<ProductType>;
};
export declare type ProductType = {
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
export declare type Query = {
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
export declare type QueryOrderArgs = {
    id: Scalars['ID'];
};
export declare type QueryOrdersArgs = {
    status: OrderStatusCode;
};
export declare type QueryProductArgs = {
    id: Scalars['ID'];
};
export declare type QueryProductsArgs = {
    after?: InputMaybe<Scalars['String']>;
    limit: Scalars['Int'];
};
export declare type QueryUserArgs = {
    phone: Scalars['String'];
};
export declare type QueryUserGetAddressArgs = {
    id: Scalars['String'];
};
export declare type QueryVerifyJwtArgs = {
    token: Scalars['String'];
};
export declare enum TypeOfProduct {
    CartProduct = "CART_PRODUCT",
    Product = "PRODUCT"
}
export declare type UserAddress = {
    __typename?: 'UserAddress';
    address: Scalars['String'];
    city: Scalars['String'];
    id: Scalars['UUID'];
    name: Scalars['String'];
    phone: Scalars['String'];
    postalCode: Scalars['Int'];
    recipient: Scalars['String'];
};
export declare type UserDto = {
    displayName?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
};
export declare type UserResponse = {
    __typename?: 'UserResponse';
    error?: Maybe<Array<FieldError>>;
    token?: Maybe<Scalars['String']>;
    user?: Maybe<UserType>;
};
export declare type UserType = {
    __typename?: 'UserType';
    createdAt: Scalars['String'];
    displayName?: Maybe<Scalars['String']>;
    id: Scalars['UUID'];
    phone: Scalars['String'];
    updatedAt: Scalars['String'];
};
export declare type CategoryFragment = {
    __typename?: 'CategoryType';
    id: number;
    slug: string;
    title: string;
};
export declare type ItemFragment = {
    __typename?: 'OrderItem';
    id: any;
    atPrice: number;
    qty: number;
    product: {
        __typename?: 'ProductType';
        id: any;
        title: string;
        slug: string;
        imageUrl: string;
        normalPrice: number;
        dicountPrice?: number | null | undefined;
        itemUnit: string;
        information?: string | null | undefined;
        nutrition?: string | null | undefined;
        howToKeep?: string | null | undefined;
        categories?: Array<{
            __typename?: 'CategoryType';
            id: number;
            slug: string;
            title: string;
        }> | null | undefined;
    };
};
export declare type OrderFragment = {
    __typename?: 'Order';
    id: string;
    status: OrderStatusCode;
    total: number;
    updatedAt: string;
    createdAt: string;
    items: Array<{
        __typename?: 'OrderItem';
        id: any;
        atPrice: number;
        qty: number;
        product: {
            __typename?: 'ProductType';
            id: any;
            title: string;
            slug: string;
            imageUrl: string;
            normalPrice: number;
            dicountPrice?: number | null | undefined;
            itemUnit: string;
            information?: string | null | undefined;
            nutrition?: string | null | undefined;
            howToKeep?: string | null | undefined;
            categories?: Array<{
                __typename?: 'CategoryType';
                id: number;
                slug: string;
                title: string;
            }> | null | undefined;
        };
    }>;
    address: {
        __typename?: 'UserAddress';
        id: any;
        name: string;
        recipient: string;
        phone: string;
        city: string;
        postalCode: number;
        address: string;
    };
    user: {
        __typename?: 'UserType';
        id: any;
        displayName?: string | null | undefined;
        phone: string;
        createdAt: string;
        updatedAt: string;
    };
};
export declare type ProductFragment = {
    __typename?: 'ProductType';
    id: any;
    title: string;
    slug: string;
    imageUrl: string;
    normalPrice: number;
    dicountPrice?: number | null | undefined;
    itemUnit: string;
    information?: string | null | undefined;
    nutrition?: string | null | undefined;
    howToKeep?: string | null | undefined;
    categories?: Array<{
        __typename?: 'CategoryType';
        id: number;
        slug: string;
        title: string;
    }> | null | undefined;
};
export declare type UserFragment = {
    __typename?: 'UserType';
    id: any;
    displayName?: string | null | undefined;
    phone: string;
    createdAt: string;
    updatedAt: string;
};
export declare type UserAddressFragment = {
    __typename?: 'UserAddress';
    id: any;
    name: string;
    recipient: string;
    phone: string;
    city: string;
    postalCode: number;
    address: string;
};
export declare type HelloQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type HelloQuery = {
    __typename?: 'Query';
    hello: string;
};
export declare type OrdersQueryVariables = Exact<{
    status: OrderStatusCode;
}>;
export declare type OrdersQuery = {
    __typename?: 'Query';
    orders: Array<{
        __typename?: 'Order';
        id: string;
        status: OrderStatusCode;
        total: number;
        updatedAt: string;
        createdAt: string;
        items: Array<{
            __typename?: 'OrderItem';
            id: any;
            atPrice: number;
            qty: number;
            product: {
                __typename?: 'ProductType';
                id: any;
                title: string;
                slug: string;
                imageUrl: string;
                normalPrice: number;
                dicountPrice?: number | null | undefined;
                itemUnit: string;
                information?: string | null | undefined;
                nutrition?: string | null | undefined;
                howToKeep?: string | null | undefined;
                categories?: Array<{
                    __typename?: 'CategoryType';
                    id: number;
                    slug: string;
                    title: string;
                }> | null | undefined;
            };
        }>;
        address: {
            __typename?: 'UserAddress';
            id: any;
            name: string;
            recipient: string;
            phone: string;
            city: string;
            postalCode: number;
            address: string;
        };
        user: {
            __typename?: 'UserType';
            id: any;
            displayName?: string | null | undefined;
            phone: string;
            createdAt: string;
            updatedAt: string;
        };
    }>;
};
