import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ProductType } from "lib/generated/graphql";
import { Image } from "@chakra-ui/image";
import React from "react";
import { toRupiah } from "@/utils/toRupiah";

const ProductListSingle: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
        <Box
            margin="2"
            w="25%"
            borderColor="gray.300"
            borderWidth="thin"
            rounded="sm"
            backgroundColor="white"
        >
            <Box>
                <Image src={product.imageUrl} />
            </Box>
            <Box p="3">
                <Heading
                    fontSize="inherit"
                    fontWeight="normal"
                    lineHeight="1.5"
                    noOfLines={1}
                >
                    {product.title}
                </Heading>
                <Flex>
                    <Text fontSize="md" color="green.500">
                        {toRupiah(product.normalPrice)}
                    </Text>
                    <Text fontSize="sm">
                        {"  "}/ {product.itemUnit}
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default ProductListSingle;
