import { ProductStore } from "@/stores/product";
import { RootStateContextValue } from "@/stores/StoreProvider";
import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import ProductListSingle from "../components/ProductListSingle";

type Props = typeof RootStateContextValue & { productStore: ProductStore };

export const Main: React.FC<Props> = observer(({ productStore }) => {
    useEffect(() => {
        productStore.getProducts();
    }, []);

    return (
        <Box>
            <ProductList>
                {productStore.products?.result.map((p) => (
                    <ProductListSingle key={p.id} product={p} />
                ))}
            </ProductList>
        </Box>
    );
});
