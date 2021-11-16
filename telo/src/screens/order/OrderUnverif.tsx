import React from "react";
import { OrderItem } from "../../components/OrderItem";
import { OrderList } from "../../components/OrderList";
import { OrderStatusCode, useOrdersQuery } from "@sayurmax/timun";
import { ScrollView, Pressable, Box } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {}

export const OrderUnverifScreen = ({ navigation }: any) => {
  const { data } = useOrdersQuery({
    variables: {
      status: OrderStatusCode.Unverified,
    },
  });

  return (
    <ScrollView>
      <OrderList>
        {data?.orders.map((o) => (
          <Pressable
            key={o.id}
            w="100%"
            onPress={() => navigation.navigate("Order Detail")}
          >
            <OrderItem data={o} />
          </Pressable>
        ))}
        <Box mb={7}></Box>
      </OrderList>
    </ScrollView>
  );
};
