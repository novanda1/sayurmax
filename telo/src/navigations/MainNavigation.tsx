import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen } from "../screens/Account";
import { CatalogScreen } from "../screens/Catalog";
import { HomeScreen } from "../screens/Home";
import { OrderScreen } from "../screens/order/Order";

const Tab = createBottomTabNavigator();

export function MainNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Order Root"
      screenOptions={({ route }) => {
        if (route.name === "Order Root") {
          return {
            headerShown: false,
            headerStyle: {
              borderBottomWidth: 0,
              borderBottomColor: "transparent",
              elevation: 0,
            },
          };
        }
        return {
          headerStyle: {
            borderBottomWidth: 0,
            borderBottomColor: "transparent",
            elevation: 0,
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen
        options={{ tabBarLabel: "Order" }}
        name="Order Root"
        component={OrderScreen}
      />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
