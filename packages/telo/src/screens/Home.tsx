import { useHelloQuery } from "@sayurmax/timun";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

interface Props {}

export const HomeScreen = (props: Props) => {
  useEffect(() => {
    console.log("just normal day");
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
    </View>
  );
};
