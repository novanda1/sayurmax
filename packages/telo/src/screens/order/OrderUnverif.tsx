import React, { useEffect } from "react";
import { OrderItem } from "../../components/OrderItem";
import { OrderList } from "../../components/OrderList";
import { ScrollView, Pressable, Box } from "native-base";
import { OrderStatusCode, useOrdersQuery } from "@sayurmax/shared";

export const OrderUnverifScreen: React.FC = ({ navigation }: any) => {
    const [result, error] = useOrdersQuery({
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
