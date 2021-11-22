import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen } from "../screens/Account";
import { CatalogScreen } from "../screens/Catalog";
import { HomeScreen } from "../screens/Home";
import { OrderScreen } from "../screens/order/Order";

import Feather from "react-native-vector-icons/Feather";

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
            <Tab.Screen
                name="Home"
                options={{
                    tabBarLabelStyle: { fontWeight: "bold" },
                    tabBarIcon: () => <Feather name="home" size={20} />,
                }}
                component={HomeScreen}
            />
            <Tab.Screen
                name="Catalog"
                options={{
                    tabBarLabelStyle: { fontWeight: "bold" },
                    tabBarIcon: () => <Feather name="book" size={20} />,
                }}
                component={CatalogScreen}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: "Order",
                    tabBarLabelStyle: { fontWeight: "bold" },
                    tabBarIcon: () => <Feather name="shopping-bag" size={20} />,
                }}
                name="Order Root"
                component={OrderScreen}
            />
            <Tab.Screen
                name="Account"
                options={{
                    tabBarLabelStyle: { fontWeight: "bold" },
                    tabBarIcon: () => (
                        <Feather name="user" size={20} color="gray.500" />
                    ),
                }}
                component={AccountScreen}
            />
        </Tab.Navigator>
    );
}
