import { OrderStatusCode, useOrdersQuery } from "@sayurmax/shared";
import { Box, Pressable, ScrollView } from "native-base";
import React from "react";
import { OrderItem } from "../../components/OrderItem";
import { OrderList } from "../../components/OrderList";

export const OrderUnverifScreen: React.FC = ({ navigation }: any) => {
    const [result] = useOrdersQuery({
        variables: {
            status: OrderStatusCode.Unverified,
        },
    });
    const { data } = result;

    return (
        <ScrollView>
            <OrderList>
                {data?.orders.map((o) => (
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
