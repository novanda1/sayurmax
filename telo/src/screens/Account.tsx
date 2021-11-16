import React from "react";
import { Text, View } from "react-native";

interface Props {}

export const AccountScreen = (props: Props) => {
  return (
    <div>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Account screen</Text>
      </View>
    </div>
  );
};
