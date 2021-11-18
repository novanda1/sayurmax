import React from "react";
import { Text, View } from "react-native";

interface Props {}

export const CatalogScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Catalog Screen</Text>
    </View>
  );
};
