import React from "react";
import { OrderItem } from "../../components/OrderItem";
import { OrderList } from "../../components/OrderList";
import {
    OrderStatusCode,
    OrdersQuery,
    useOrdersQuery,
    useHelloQuery,
    HelloDocument,
} from "@sayurmax/timun";
import { ScrollView, Pressable, Box } from "native-base";
import { useQuery } from "urql";

export const OrderUnverifScreen: React.FC = ({ navigation }: any) => {
    const [a] = useQuery({
        query: HelloDocument,
    });
    console.log('a :>> ', a);

    return (
        <ScrollView>
            {/*            <OrderList>
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
                </OrderList> */}
        </ScrollView>
    );
};
