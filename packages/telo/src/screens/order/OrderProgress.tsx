import React from "react";
import { OrderItem } from "../../components/order/OrderItem";
import { OrderList } from "../../components/order/OrderList";
import { OrderStatusCode, useOrdersQuery } from "@sayurmax/shared";
import { ScrollView, Box, Pressable } from "native-base";

export const OrderProgressScreen = ({ navigation }: any) => {
    const [result] = useOrdersQuery({
        variables: {
            status: OrderStatusCode.Progress,
            limit: 10
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
