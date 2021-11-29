import { OrderStatusCode, useOrdersQuery } from "@sayurmax/shared";
import { Box, Pressable, ScrollView } from "native-base";
import React, { useEffect } from "react";
import { OrderItem } from "../../components/order/OrderItem";
import { OrderList } from "../../components/order/OrderList";
import { useOrderStore } from "../../modules/order/useOrderStore";

export const OrderUnverifScreen: React.FC = ({ navigation }: any) => {
    const { date } = useOrderStore();

    const [result, reexecuteQuery] = useOrdersQuery({
        variables: {
            status: OrderStatusCode.Unverified,
            limit: 11,
            date: {
                year: date.year(),
                month: date.month() + 1,
                day: date.date(),
            },
        },
    });
    const { data } = result;

    useEffect(() => {
        reexecuteQuery();
    }, [date]);

    return (
        <ScrollView>
            <OrderList>
                {data?.orders.result?.map((o) => (
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
