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
}

export const OrderList: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Container minH="100vh">
                <Heading size="md" mt="6">
                    32 Pesanan Belum diantar
                </Heading>
                <Text>Kamu punya pesanan yang harus diantar hari ini</Text>

                <HStack space="2" mt="3">
                    <Input
                        placeholder="Cari list"
                        bg="#fff"
                        flex="1"
                        borderRadius="4"
                        py="3"
                        px="1"
                        fontSize="14"
                        _web={{
                            _focus: {
                                borderColor: "muted.300",
                                style: {},
                            },
                        }}
                        InputLeftElement={
                            <Icon
                                m="2"
                                ml="3"
                                size="6"
                                color="gray.400"
                                as={<Feather name="search" />}
                            />
                        }
                    />
                    <IconButton
                        variant="solid"
                        backgroundColor="white"
                        my="1px"
                        w="45px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        icon={<IonIcon name="filter-sharp" />}
                        _icon={{ fontSize: "20px" }}
                    />
                </HStack>

                <VStack space="2" alignItems="center" w="100%" mt="4">
                    {children}
                </VStack>
            </Container>
        </>
    );
};
