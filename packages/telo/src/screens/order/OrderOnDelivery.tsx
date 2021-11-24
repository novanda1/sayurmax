import React from "react";
import { OrderItem } from "../../components/OrderItem";
import { OrderList } from "../../components/OrderList";
import { OrderStatusCode, useOrdersQuery } from "@sayurmax/shared";
import { ScrollView, Box, Pressable } from "native-base";

export const OrderOnDeliveryScreen = ({ navigation }: any) => {
    const [result] = useOrdersQuery({
        variables: {
            status: OrderStatusCode.OnDelivery,
            limit: 10,
        },
    });

    const { data } = result;

    return (
        <ScrollView>
            <OrderList>
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
