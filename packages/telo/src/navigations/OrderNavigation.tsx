import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { OrderUnverifScreen } from "../screens/order/OrderUnverif";
import { OrderProgressScreen } from "../screens/order/OrderProgress";
import { OrderOnDeliveryScreen } from "../screens/order/OrderOnDelivery";
import { OrderCompletedScreen } from "../screens/order/OrderCompleted";

import { OrderCancelledScreen } from "../screens/order/OrderCancelled";

const TabOrder = createMaterialTopTabNavigator();

export function OrderNavigation() {
    return (
        <TabOrder.Navigator
            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarItemStyle: { width: 134 },
                tabBarLabelStyle: { fontSize: 16, textTransform: "capitalize" },
                tabBarActiveTintColor: "#0FB36C",
                tabBarInactiveTintColor: "#9E9E9E",
                tabBarIndicatorStyle: { backgroundColor: "#0FB36C" },
            }}
        >
            <TabOrder.Screen
                name="Not Verified"
                component={OrderUnverifScreen}
            />
            <TabOrder.Screen
                name="On Progress"
                component={OrderProgressScreen}
            />
            <TabOrder.Screen
                name="On Delivery"
                component={OrderOnDeliveryScreen}
            />
            <TabOrder.Screen
                name="Completed"
                component={OrderCompletedScreen}
            />
            <TabOrder.Screen
                name="Cancelled"
                component={OrderCancelledScreen}
            />
        </TabOrder.Navigator>
    );
}
