import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen } from "../screens/Account";
import { CatalogScreen } from "../screens/Catalog";
import { HomeScreen } from "../screens/Home";

import Feather from "react-native-vector-icons/Feather";
import { OrderNavigation } from "./OrderNavigation";

const Tab = createBottomTabNavigator();

export function MainNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Order"
            screenOptions={({ route }) => {
                return {
                    headerStyle: {
                        borderBottomWidth: 0,
                        borderBottomColor: "transparent",
                        elevation: 0,
                    },
                    tabBarActiveTintColor: "green",
                };
            }}
        >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            color={focused ? "green" : "gray"}
                            name="home"
                            size={20}
                        />
                    ),
                }}
                component={HomeScreen}
            />
            <Tab.Screen
                name="Catalog"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            color={focused ? "green" : "gray"}
                            name="book"
                            size={20}
                        />
                    ),
                }}
                component={CatalogScreen}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: "Order",
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            color={focused ? "green" : "gray"}
                            name="shopping-bag"
                            size={20}
                        />
                    ),
                }}
                name="Order"
                component={OrderNavigation}
            />
            <Tab.Screen
                name="Account"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            color={focused ? "green" : "gray"}
                            name="user"
                            size={20}
                        />
                    ),
                }}
                component={AccountScreen}
            />
        </Tab.Navigator>
    );
}
