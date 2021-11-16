import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen } from "../screens/Account";
import { CatalogScreen } from "../screens/Catalog";
import { HomeScreen } from "../screens/Home";
import { OrderScreen } from "../screens/order/Order";

const Tab = createBottomTabNavigator();

export function MainNavigation() {
  return (
    <Tab.Navigator initialRouteName="Order">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
