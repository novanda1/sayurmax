import React from "react";
import { Text, View } from "react-native";
import { useHelloQuery } from "@sayurmax/timun";

interface Props {}

export const HomeScreen = (props: Props) => {
  const { data } = useHelloQuery();

  return (
    <div>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home screen {data?.hello}</Text>
      </View>
    </div>
  );
};
