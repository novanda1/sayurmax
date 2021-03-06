import { useHelloQuery } from "@sayurmax/shared";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

interface Props {}

export const HomeScreen = (props: Props) => {
    const [result, error] = useHelloQuery();

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Home screen</Text>
            <Text>{result.data?.hello}</Text>
        </View>
    );
};
