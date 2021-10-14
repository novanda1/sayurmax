import { initializeApollo } from "lib/apollo/apollo";
import {
    GetProductsDocument,
    GetProductsQuery,
    GetProductsQueryVariables,
    ProductResponse,
} from "lib/generated/graphql";
import { makeAutoObservable } from "mobx";

export class ProductStore {
    products: ProductResponse;

    constructor() {
        makeAutoObservable(this);
    }

    async getProducts(limit?: number): Promise<ProductResponse> {
        const client = initializeApollo();

        return client
            .query<GetProductsQuery>({
                query: GetProductsDocument,
                variables: {
                    limit: limit ?? 10,
                } as GetProductsQueryVariables,
            })
            .then(({ data }) => {
                this.products = data?.products;

                return data?.products;
            });
    }
}

export default new ProductStore();
