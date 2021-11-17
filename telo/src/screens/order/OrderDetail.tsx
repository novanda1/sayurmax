import React from "react";
import { ScrollView } from "react-native-gesture-handler";

interface Props {}

const OrderDetail = (props: Props) => {
  console.log(props);
  return (
    <ScrollView>
      <div>halo</div>
    </ScrollView>
  );
};

export default OrderDetail;
