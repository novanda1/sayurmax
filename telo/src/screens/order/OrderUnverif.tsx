import React from "react";
import { Text, View } from "react-native";
import { OrderItem } from "../../components/OrderItem";
import { OrderList } from "../../components/OrderList";

interface Props {}

export const OrderUnverifScreen = (props: Props) => {
  return (
    <div>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <OrderList>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </OrderList>
      </View>
    </div>
  );
};
