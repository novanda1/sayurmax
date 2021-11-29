import React from "react";
import {
    Heading,
    HStack,
    Icon,
    IconButton,
    Input,
    Text,
    VStack,
} from "native-base";
import Container from "../Container";
import Feather from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";

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
