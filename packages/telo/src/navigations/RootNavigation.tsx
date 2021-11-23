import {
    CardStyleInterpolators,
    createStackNavigator,
} from "@react-navigation/stack";
import OrderDetail from "../screens/order/OrderDetail";
import { MainNavigation } from "./MainNavigation";

const Stack = createStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: route.name === "Main Navigation" ? false : true,
                headerStyle: {
                    borderBottomWidth: 0,
                    borderBottomColor: "transparent",
                    elevation: 0,
                },
            })}
        >
            <Stack.Screen
                name="Main Navigation"
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forFadeFromBottomAndroid,
                }}
                component={MainNavigation}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forFadeFromBottomAndroid,
                }}
                name="Order Detail"
                component={OrderDetail}
            />
        </Stack.Navigator>
    );
};
