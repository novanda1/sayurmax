import { Box } from "@chakra-ui/react";
import { ProductType } from "lib/generated/graphql";

const ProductListSingle: React.FC<{ product: ProductType }> = ({ product }) => {
    return <Box>{product.title}</Box>;
};

export default ProductListSingle;
