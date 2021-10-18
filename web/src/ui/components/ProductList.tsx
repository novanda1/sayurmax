import React from "react";
import { Container, Flex } from "@chakra-ui/react";

const ProductList: React.FC = ({ children }) => {
    return (
        <Container maxW="container.lg" my="10">
            <Flex flexWrap="wrap" margin="-2">
                {children}
            </Flex>
        </Container>
    );
};

export default ProductList;
