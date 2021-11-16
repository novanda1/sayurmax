import React from "react";
import { OrderItem } from "../../components/OrderItem";
import { OrderList } from "../../components/OrderList";
import { OrderStatusCode, useOrdersQuery } from "@sayurmax/timun";
import { ScrollView, Box } from "native-base";

interface Props {}

export const OrderProgressScreen = (props: Props) => {
  const { data } = useOrdersQuery({
    variables: {
      status: OrderStatusCode.Progress
    },
  });

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
