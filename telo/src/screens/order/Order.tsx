import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { OrderUnverifScreen } from "./OrderUnverif";
import { OrderProgressScreen } from "./OrderProgress";
import { OrderOnDeliveryScreen } from "./OrderOnDelivery";
import { OrderCompletedScreen } from "./OrderCompleted";

interface Props {}

const TabOrder = createMaterialTopTabNavigator();

export const OrderScreen = (props: Props) => {
  return (
    <TabOrder.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: 100 },
        tabBarLabelStyle: { fontSize: 12, textTransform: "capitalize" },
      }}
    >
      <TabOrder.Screen name="Unverified" component={OrderUnverifScreen} />
      <TabOrder.Screen name="On Progress" component={OrderProgressScreen} />
      <TabOrder.Screen name="On Delivery" component={OrderOnDeliveryScreen} />
      <TabOrder.Screen name="Completed" component={OrderCompletedScreen} />
    </TabOrder.Navigator>
  );
};
