import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { OrderUnverifScreen } from "./OrderUnverif";
import { OrderProgressScreen } from "./OrderProgress";
import { OrderOnDeliveryScreen } from "./OrderOnDelivery";
import { OrderCompletedScreen } from "./OrderCompleted";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import OrderDetail from "./OrderDetail";

interface Props {}

const TabOrder = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

function OrderStatus() {
  return (
    <TabOrder.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: 100 },
        tabBarLabelStyle: { fontSize: 12, textTransform: "capitalize" },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: { backgroundColor: "green" },
      }}
    >
      <TabOrder.Screen name="Unverified" component={OrderUnverifScreen} />
      <TabOrder.Screen name="On Progress" component={OrderProgressScreen} />
      <TabOrder.Screen name="On Delivery" component={OrderOnDeliveryScreen} />
      <TabOrder.Screen name="Completed" component={OrderCompletedScreen} />
    </TabOrder.Navigator>
  );
}

export const OrderScreen = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          borderBottomWidth: 0,
          borderBottomColor: "transparent",
          elevation: 0,
        },
      })}
    >
      <Stack.Screen
        name="Order"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        component={OrderStatus}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Order Detail"
        component={OrderDetail}
      />
    </Stack.Navigator>
  );
};
