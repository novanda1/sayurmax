import { OrderStatusCode } from "@sayurmax/shared";
import {
    Box,
    Heading,
    HStack,
    IconButton,
    Pressable,
    ScrollView,
    Text,
} from "native-base";
import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { OrderItem } from "../../components/order/OrderItem";
import { OrderList } from "../../components/order/OrderList";
import { useOrder } from "../../modules/order/useOrder";

export const OrderCancelledScreen = ({ navigation }: any) => {
    const { result, SearchInput } = useOrder({
        orderStatus: OrderStatusCode.Progress,
    });

    const { data } = result;

    return (
        <ScrollView>
            <OrderList
                topELement={
                    <>
                        <Heading size="md" mt="6">
                            {data?.orders.result?.length
                                ? data?.orders.result?.length + " "
                                : null}
                            Pesanan Dibatalkan
                        </Heading>
                        <Text>
                            {data?.orders.result?.length
                                ? "Kamu punya pesanan yang telah dibatalkan"
                                : "Tidak ada daftar"}
                        </Text>

                        <HStack space="2" mt="3">
                            {SearchInput}
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
                    </>
                }
            >
                {data?.orders.result.map((o) => (
                    <Pressable
                        key={o.id}
                        w="100%"
                        onPress={() =>
                            navigation.navigate("Order Detail", {
                                items: o.items,
                                order: o,
                            })
                        }
                    >
                        <OrderItem data={o} />
                    </Pressable>
                ))}
                <Box mb={7}></Box>
            </OrderList>
        </ScrollView>
    );
};
