import React from "react";
import { OrderItem } from "../../components/OrderItem";
import { OrderList } from "../../components/OrderList";
import { OrderStatusCode, useOrdersQuery } from "@sayurmax/shared";
import { ScrollView, Box } from "native-base";

interface Props {}

export const OrderOnDeliveryScreen = (props: Props) => {
    const [result] = useOrdersQuery({
        variables: {
            status: OrderStatusCode.OnDelivery,
        },
    });

    const { data } = result;

    return (
        <ScrollView>
            <OrderList>
                {data?.orders.map((o) => (
                    <OrderItem key={o.id} data={o} />
                ))}
                <Box mb={7}></Box>
            </OrderList>
        </ScrollView>
    );
};
