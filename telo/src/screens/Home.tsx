import React from "react";
import { Text, View } from "react-native";

interface Props {}

export const HomeScreen = (props: Props) => {
  return (
    <div>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home screen</Text>
      </View>
    </div>
  );
};
