import { VStack } from "native-base";
import React from "react";
import Container from "../Container";

interface Props {
    children: React.ReactNode;
    topELement?: React.ReactNode;
}

export const OrderList: React.FC<Props> = ({ children, topELement }) => {
    return (
        <>
            <Container minH={100}>
                {topELement}
                <VStack space="2" alignItems="center" w="100%" mt="4">
                    {children}
                </VStack>
            </Container>
        </>
    );
};
