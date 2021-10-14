import { RootStateContextValue } from "@/stores/StoreProvider";
import { Box } from "@chakra-ui/react";
import React from "react";
import ProductList from "../components/ProductList";

export const Main: React.FC<typeof RootStateContextValue> = ({}) => {
    return <Box>
        <ProductList></ProductList>
    </Box>;
};
