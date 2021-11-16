import React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { OrderUnverifScreen } from "./OrderUnverif";
import { OrderUndeliverScreen } from "./OrderUndeliver";

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
      <TabOrder.Screen name="Undeliver" component={OrderUndeliverScreen} />
    </TabOrder.Navigator>
  );
};
