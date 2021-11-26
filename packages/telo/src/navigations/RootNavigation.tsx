import {
    CardStyleInterpolators,
    createStackNavigator
} from "@react-navigation/stack";
import { useVerifyLoggedIn } from "../modules/auth/useVerifyLoggedIn";
import { default as SignScreen } from "../screens/auth/Sign";
import OrderDetail from "../screens/order/OrderDetail";
import { MainNavigation } from "./MainNavigation";

export type RootStackParamList = {
    Main: undefined;
    Sign: undefined;
    OrderDetail: undefined;
};

const Stack = createStackNavigator();

export const RootNavigation = () => {
    const loggedIn = useVerifyLoggedIn();

    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown:
                    route.name === "Main Navigation" || route.name === "Sign"
                        ? false
                        : true,
                headerStyle: {
                    borderBottomWidth: 0,
                    borderBottomColor: "transparent",
                    elevation: 0,
                },
            })}
        >
            {loggedIn ? (
                <>
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
                </>
            ) : (
                <Stack.Screen
                    options={{
                        cardStyleInterpolator:
                            CardStyleInterpolators.forFadeFromBottomAndroid,
                    }}
                    name="Sign"
                    component={SignScreen}
                />
            )}
        </Stack.Navigator>
    );
};
